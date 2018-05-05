const express = require('express');
const rout = express.Router();

const routProducts = '/products';
const routProductsID = '/products/:id';
const routReviews = '/reviews';
const routReviewsID = '/reviews/:id'
const routProductsIDReviews = '/products/:id/reviews'

rout.get(routProducts, function (req, res, next) {
    product.find({}).then(function (products) {
        res.send(products);
    }).catch(function (next) {
        res.send({ error: '500' });
    });
});

rout.get(routProductsID, function (req, res, next) {
    product.findOne({_id: req.params.id}).then(function (product) {
        res.send(product);
    }).catch(function (next) {
        res.send({ error: '404' });
    });
});

rout.get(routReviews, function (req, res, next) {
    review.find({}).then(function (reviews) {
        res.send(reviews);
    }).catch(function (next) {
        res.send({ error: '500' });
    });
});

rout.get(routReviewsID, function (req, res, next) {
    review.findOne({_id: req.params.id}).then(function (review) {
        res.send(review);
    }).catch(function (next) {
        res.send({ error: '404' });
    });
});

rout.get(routProductsIDReviews, function (req, res, next) {
    review.find({productId: req.params.id}).then(function (reviews) {
        res.send(reviews);
    }).catch(function (next) {
        res.send({ error: '404' });
    });
});

module.exports = rout;