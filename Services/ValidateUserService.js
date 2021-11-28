const { UserModel } = require('../Models');
const uuid = require('uuid');
const dayjs = require('dayjs');
const auth = require('../Services/authentication').auth;

function validate(user) {
    try {
        !validateEmail(user.email) ? throwError(`Email invalid: ${user.email}`) : null;
        !validatePassword(user.password) ? throwError(`Password invalid`) : null;
        !validateId(user.id) ? throwError(`Id invalid`) : null;

        let userModel = new UserModel(
            user.id = null, 
            user.name, 
            user.birthDate, 
            user.email, 
            user.password = auth(user.password),
            user.active, 
            user.createdAt, 
            user.disabledAt
        );
        
        return { isValidate: true, userModel };
    } catch (error) {
        throw error;
    }
}

function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}

function validatePassword(password) {
    return ![null, undefined, '', ' '].includes(password);
}

function validateId(id) {
    if (id != null) {
        if (id == uuid.NIL) {
            return false;
        } else {
            return uuid.validate(id);
        }
    } 
    return true;
}

function throwError(message) {
    throw `ERROR: ${message}`;
}

function exampleCreateUser() {
    return {
        name: 'string',
        birthDate: `string: example - ${dayjs().format('DD/MM/YYYY')}`,
        email: 'string',
        password: 'string'
    };
}

module.exports = { validate, exampleCreateUser };