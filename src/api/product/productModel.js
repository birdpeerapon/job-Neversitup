const knex = require('../../knex');

class productModel {
    createProduct(trx, obj) {
        return trx('tbl_product')
            .insert(obj)
    }
}

module.exports = new productModel();