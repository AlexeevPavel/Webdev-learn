const mongo = require('mongoose');
const schem = mongo.Schema;

const ProductSchema = new schem({
  name: {
    type: String,
    unique: [true],
    required: [true]
  }
});

const Product = mongo.model('product', ProductSchema);

module.exports = Product;