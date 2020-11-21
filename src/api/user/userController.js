const userModel = require('./userModel');

const { success, failed } = require('../../config/response');
const { transaction } = require('../../middleware/transaction')
const { encrypted, generateToken } = require('../../functions')
const dayjs = require('dayjs')

class userController {

    async getUserProfile(req, res) {
        try {
            const Email = req.Email;
            let query_UserProfile = await userModel.getuserProfileByEmail(Email)
            success(res, query_UserProfile);

        } catch (error) {
            failed(res, 'ดึงข้อมูลไม่สำเร็จ', error)
        }
    }



}

module.exports = new userController()