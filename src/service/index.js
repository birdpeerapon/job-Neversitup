const request = require('request-promise')
const FormData = require('form-data')


const LINE_NOTI = async (message) => {
    let formdata = new FormData();
    formdata.append("message", message);

    return request.post({
        uri: 'https://notify-api.line.me/api/notify',
        headers: {
            'Content-Type': 'multipart/form-data'
        },
        auth: {
            'bearer': '0JgOmxDb9QQ4UgeSAgC86ReBgjkdZpPj31FdgsrUbHh'
        },
        form: { message }
    })
}
module.exports = {
    LINE_NOTI
};