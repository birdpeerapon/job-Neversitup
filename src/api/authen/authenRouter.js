const route = require('express')['Router']();
const authenController = require('./authenController.js');

route.get('/profile',
    authenController.getProfile
)

route.post('/create_user',
    authenController.createUser
)

module.exports = route;