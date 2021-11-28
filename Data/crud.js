const dbConnection = require('../SQL/connectSqlite');
const UserService = require('../Services/UserService');

async function create(tableName, object) {
    object = UserService.toSaveUser(object);

    let columnsAndValues = createInsert(object);
    let insert = `INSERT INTO ${tableName} (${columnsAndValues.columns}) VALUES (${columnsAndValues.values});`;
    await dbConnection.insert(insert);
    return insert;
}

function createInsert(object) {
    let qtd_Properties = Object.keys(object).length;
    let columns = "", values = "";

    Object.keys(object).forEach((key, index) => {
        if (index == qtd_Properties - 1) {
            columns += `${key}`;
            values += `${object[key]}`;
        } else {
            columns += `${key}, `;
            values += `${object[key]}, `;
        }
    });

    return { columns: columns, values: values };
}

async function select(propertys, tableName, extras = '') {
    let coluns = "", select = "";

    for (let index = 0; index < propertys.length; index++) {
        coluns += (index == propertys.length - 1) ? `${propertys[index]}` : `${propertys[index]}, `;
    }

    if (['', ' ', undefined].includes(extras)) {
        select = `SELECT ${coluns} FROM ${tableName}`;
    } else {
        select = `SELECT ${coluns} FROM ${tableName} ${extras}`;
    }

    return await dbConnection.select(`${select.trim()}';'`);
}

module.exports = { create, select };