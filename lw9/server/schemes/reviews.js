const mongo = require('mongoose');
const schem = mongo.Schema;
const ReviewSchema = new schem({
    productId: {
        type: schem.Types.ObjectId,
        required: [true]
    },
    discription: {
        type: string,
        required: [true]
    },
    created: {
        type: Data,
        default: date.now,
    }
});
const Review = mongoose.model('review', ReviewSchema);
module.exports = review;