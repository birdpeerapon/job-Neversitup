const Joi = require('joi');


const schemaLogin = Joi.object({
    Email: Joi.string().email(),
    Password: Joi.string().required(),
})
const schemaRegister = Joi.object({
    PhoneNumber: Joi.string().length(10).pattern(/(09)|(08)|(06)[.\- ]?[0-9]/).replace('+66', '0').required(),
    Name: Joi.string().required(),
    Surname: Joi.string().required(),
    Email: Joi.string().email().allow('', null),
    Password: Joi.string().required(),
    AddressName: Joi.string().required(),
    PostCode: Joi.string().length(5).required(),
    Province: Joi.string().required(),
    District: Joi.string().required(),
    SubDistrict: Joi.string().required(),



})


module.exports = {
    schemaLogin,
    schemaRegister

}