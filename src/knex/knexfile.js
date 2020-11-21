require('dotenv').config();

module.exports = {
    development: {
        client: 'mysql', // type database
        useNullAsDefault: true,
        connection: {
            host: '165.22.98.197',
            user: 'admin_systano', // username
            password: 'admin_systano', // password
            database: 'neversit' // database name
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