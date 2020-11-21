const route = require('express')['Router']();
const { validate_token } = require('../../middleware/validate_token')
const userController = require('./userController')

route.post('/getUserProfile',
    validate_token(),
    userController.getUserProfile
)



module.exports = route;