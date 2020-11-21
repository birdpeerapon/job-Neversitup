const authenModel = require('./authenModel');
const productModel = require('../product/productModel');
const userModel = require('../user/userModel')
const { success, failed } = require('../../config/response');
const { transaction } = require('../../middleware/transaction')
const { encrypted, generateToken } = require('../../functions')
const dayjs = require('dayjs')

class authenController {

    async register(req, res) {
        try {
            const { Password } = req.body;
            let password_endcrypt = await encrypted(Password)
            let obj = {
                ...req.body,
                UserId: '1',
                Password: password_endcrypt,

            }

            let res_register = await authenModel.register(obj);
            console.log(res_register)
            success(res, name);

        } catch (error) {
            failed(res, 'ดึงข้อมูลไม่สำเร็จ', error)
        }
    }
    async login(req, res) {
        try {
            const { Email, Password } = req.body;
            const query = await userModel.getUserBYEmail({ Email })
            if (query.length === 0) return failed(res, 'ไม่พบ Email ในระบบ', error)

            const compare_password = decrypt(query[0].Password, Password);
            if (!compare_password) {
                return failed(res, `password is't match`);
            }
            let token_login = generateToken(Email);
            const respon = {
                firstLogin: query[0].firstLogin === 0 ? true : false,
                token_login: token_login,
                role: 'user',
            }
            success(res, respon);


        } catch (error) {
            failed(res, 'login fail', error)

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