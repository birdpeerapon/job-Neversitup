const authenModel = require('./authenModel.js');
const productModel = require('../product/productModel');
const { success, failed } = require('../../config/response');
const { transaction } = require('../../middleware/transaction')

class authenController {
    getProfile(req, res) {
        try {
            success(res, 'ดึงข้อมูลสำเร็จ');
        } catch (error) {
            failed(res, 'ดึงข้อมูลไม่สำเร็จ', error)
        }
    }

    async createUser(req, res) {
        try {
            const { user_id } = req.body;
            await transaction([
                async (trx) => await authenModel.insertUser(trx, { user_id }),
                async (trx) => await productModel.createProduct(trx, { product_id: '1234' })
            ])
            success(res, 'สร้างข้อมูลสำเร็จ');
        } catch (error) {
            failed(res, 'สร้างข้อมูลไม่สำเร็จ', error)
        }
    }
}

module.exports = new authenController()