const mongo = require('mongoose');
const schem = mongo.Schema;
const ProdSchem = new Schema({
    name: {
        type: String,
        unique: [true],
        require: [true]
    }
});
const Prod = mongo.model('product', ProdSchem);
module.exports = prod;