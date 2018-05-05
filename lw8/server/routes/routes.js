const express = require('express');
const rout = express.Router();

const routProducts = '/products';

rout.get(routProducts, function (req, res, next) {
    product.find({}).then(function (products) {
        res.send(products);
    }).catch(function (next) {
        res.send({ error: '500' });
    })
})