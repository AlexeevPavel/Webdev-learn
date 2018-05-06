const express = require('express');
const router = express.Router();
const Product = require('../schemes/products');
const Review = require('../schemes/reviews');

const routeProd = '/products';
const routeProdID = '/products/:id';
const routeReviews = '/reviews';
const routeReviewsID = '/reviews/:id';
const routeProdIDReviews = '/products/:id/reviews';

router.get(routeProd, function(req, res, next) {
  Product.find({}).then(function(products) {
    res.send(products);
  }).catch(function(next) {
    res.send({error: '500'});
  });
});


router.get(routeProdID, function(req, res, next) {
  Product.findOne({_id: req.params.id}).then(function(product) {
    res.send(product);
  }).catch(function(next) {
    res.send({error: '404'});
  });
});

router.post(routeProd, function(req, res, next) {
  Product.create(req.body).then(function(product) {
    res.send(product);
  }).catch(function(next) {
    res.send(next);
  });
});

router.put(routeProdID, function(req, res, next) {
  Product.findByIdAndUpdate({_id: req.params.id}, req.body).then(function() {
    Product.findOne({_id: req.params.id}).then(function(product) {
      res.send(product);
    }).catch(function(next) {
      res.send({error: '404'});
    });
  }).catch(function(next) {
    res.send({error: '500'});
  });
});

router.delete(routeProdID, function(req, res, next) {
  Product.findByIdAndRemove({_id: req.params.id}).then(function(product) {
    res.send({ message: "Product successfully deleted!", product});
  }).catch(function(next) {
    res.send({error: '404'});
  });
});

router.get(routeReviews, function(req, res, next) {
  Review.find({}).then(function(reviews) {
    res.send(reviews);
  }).catch(function(next) {
    res.send({error: '500'});
  });
});

router.get(routeReviewsID, function(req, res, next) {
  Review.findOne({_id: req.params.id}).then(function(review) {
    res.send(review);
  }).catch(function(next) {
    res.send({error: '404'});
  });
});

router.post(routeReviews, function(req, res, next) {
  Review.create(req.body).then(function(review) {
    res.send(review);
  }).catch(function(next) {
    res.send({error: '500'});
  });
});

router.put(routeReviewsID, function(req, res, next) {
  Review.findByIdAndUpdate({_id: req.params.id}, req.body).then(function() {
    Review.findOne({_id: req.params.id}).then(function(review) {
      res.send(review);
    }).catch(function(next) {
      res.send({error: '404'});
    });
  }).catch(function(next) {
    res.send({error: '500'});
  });
});

router.delete(routeReviewsID, function(req, res, next) {
  Review.findByIdAndRemove({_id: req.params.id}).then(function(review) {
    res.send(review);
  }).catch(function(next) {
    res.send({error: '404'});
  });
});

router.get(routeProdIDReviews, function(req, res, next) {
  Review.find({productId: req.params.id}).then(function(reviews) {
    res.send(reviews);
  }).catch(function(next) {
    res.send({error: '404'});
  });
});

module.exports = router;