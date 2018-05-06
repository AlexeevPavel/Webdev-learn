const mongo = require('mongoose');
const schem = mongo.Schema;

const ReviewSchema = new schem({
  productId: {
    type: schem.Types.ObjectId,
    required: [true]
  },
  discription: {
    type: String,
    required: [true]
  },
  created: { 
    type: Date,
    default: Date.now,
  }
});

const Review = mongo.model('review', ReviewSchema);

module.exports = Review;