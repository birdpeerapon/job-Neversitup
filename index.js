const express = require('express');
const bodyparser = require('body-parser');
const cors = require('cors');
const ratelimit = require('express-rate-limit');
const helmet = require('helmet');
const path = require('path')
const { createApi } = require('./src/api')
const { debug } = require('./src/config/debug');
const fs = require('fs');
const https = require('https');

require('dayjs/locale/th');
require('dotenv').config();

const app = express();
/*###################### SETTING ######################*/
app.use(helmet());
app.use('/api/v1/static', express.static(path.join(__dirname, './public')));

const whitelist = [
    undefined
]

const corsOption = {
    origin: (origin, cb) => {
        debug('origin %o', origin);
        if (whitelist.indexOf(origin) !== -1) {
            cb(null, true)
        } else {
            cb(new Error('Not allows by Cors'))
        }
    },
    optionsSuccessStatus: 200,
    preflightContinue: true,
    credentials: true
}

app.use(cors(corsOption));
app.use(bodyparser.urlencoded({ extended: true, limit: '50mb' }));;
app.use(bodyparser.json({ limit: '50mb' }));

const limiter = ratelimit({
    windowsMs: 60 * 1000,
    max: 200
})

app.use(limiter)

/*###################### DEBUG ######################*/
app.use((req, res, next) => {
    debug(`api is callled %o`, req.originalUrl);
    next();
});
/*###################### CREATE API ######################*/
createApi(app);

let key, cert, server;
let httpsOption = {}
switch (process.env.NODE_ENV) {
    case 'production':
        key = fs.readFileSync('', 'utf8');
        cert = fs.readFileSync('', 'utf8');
        httpsOption = {
            key, cert,
            strictSSL: false,
            rejectUnauthorized: false
        }
        process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
        server = https.createServer(httpsOption, app);
        return server.listen(process.env.PORT, () => {
            debug(`Https is running port ${process.env.PORT}`)
        });
    case 'develop':
        return app.listen(process.env.PORT, () => {
            debug(`Server is running port ${process.env.PORT}`)
        });
}