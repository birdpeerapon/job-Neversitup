

class authenModel {
    getUser(trx, obj) {
        return trx('tbl_user')
            .select()
            .where(obj)
    }

    insertUser(trx, obj) {
        return trx('tbl_user')
            .insert(obj)
    }
}

module.exports = new authenModel();