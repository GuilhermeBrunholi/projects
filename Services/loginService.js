const authentication = require('./authentication');
const crud = require('../Data/crud');
const { authModel } = require('../Models');

function login(user) {
    const userId = crud.select(["Id"], 'User', `WHERE Email = '${user.email}'`);
    
    if (userId) {
        const auth = authentication.auth(user.password);
        return auth;
    }

    return new authModel(false, "Error: user not exists");
}

module.exports = { login };