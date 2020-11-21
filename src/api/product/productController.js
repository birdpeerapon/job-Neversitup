const { success, failed } = require('../../config/response');
const productModel = require('./productModel.js')
const { LINE_NOTI } = require('../../service')
const { err } = require('../../config/debug')
class productController {

    async getProduct(req, res) {
        try {
            success(res, 'success');
        } catch (error) {
            failed(res, error);
        }
    }
}




module.exports = new productController()