const { failed } = require("../config/response");

exports.validate_schema = (schema = [], properties = 'body') => async (req, res, next) => {
    if (typeof schema !== "object") {
        return failed(res, `schema supported array only`);
    }

    const length = schema.length;
    for (let x = 0; x < length; x++) {
        const { error } = schema[x].validate(req[properties]);
        if (error) {
            return failed(res, error.details[0].message);
        }
    }

    next();
}