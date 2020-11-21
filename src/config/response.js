const { err } = require('./debug');

exports.success = (res, result, code) => res.status(code || 200).json({ success: true, result });
exports.failed = (res, message, error, code) => {
    err(error || message);
    let obj = { success: false }
    if (typeof message === 'string') {
        obj = { ...obj, message }
    } else {
        const { message: ms, ...ob } = message;
        obj = { ...obj, message: ms, result: ob }
    }

    return res.status(code || 400).json(obj);
}
