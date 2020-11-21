require('dotenv').config();

module.exports = {
    development: {
        client: 'mysql', // type database
        useNullAsDefault: true,
        connection: {
            host: 'localhost',
            user: 'root',
            password: 'waterfire',
            database: 'demo',
        },
        pool: {
            min: 0,
            max: 10,
            idleTimeoutMillis: 5 * 1000,
            acquireTimeoutMillis: 3 * 1000,
            propagateCreateError: false
        },
    }
}