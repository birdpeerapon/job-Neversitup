const { debug, err } = require('../config/debug');
const config = require('./knexfile')
const env = 'development';
const knex = require('knex')(config[env])

const testConnect = async () => {
    try {
        await Promise.all([
            // knex.raw('select 1+1 as result'),
        ])
        debug(`====== CONNECT DATABASE SUCCESS ======`);
    } catch (error) {
        console.log(error)
        debug(`====== CONNECT DATABASE FALIED ======`);
    }
}

testConnect();

module.exports = knex;
