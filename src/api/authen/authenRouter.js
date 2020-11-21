const route = require('express')['Router']();
const { schemaLogin, schemaRegister } = require('./authenSchema')
const authenController = require('./authenController.js');
const { validate_schema } = require('../../middleware/validate_schema');


route.post('/register',
    validate_schema([schemaRegister]),
    authenController.register
)
route.post('/login',
    validate_schema([schemaLogin]),
    authenController.login

)

module.exports = route;