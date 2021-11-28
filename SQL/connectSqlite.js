var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('./SQL/database.db', (error) => (error) ? console.log(error) : null);

async function insert(sql) {
    let result = new Promise(function (resolve, reject) {
        db.run(sql, function (error, rows) {
            if (error) {
                return reject(error.message);
            }
            resolve(rows);
        });
    });

    return await result;
}

async function select(sql) {
    let result = new Promise((resolve, reject) => {
        db.get(sql, (error, success) => {
            if (error) {
                reject(error);
            } else {
                resolve(success);
            }
        });
    });

    return await result;
}

module.exports = { insert, select };