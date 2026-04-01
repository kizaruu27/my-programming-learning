const Product = require("../models/product");

exports.getProducts = (req, res, next) => {
  Product.fetchAll((products) => {
    res.render("shop/product-list", {
      prods: products,
      pageTitle: "Shop",
      path: "/products",
      hasProducts: products.length > 0,
      activeShop: true,
      productCSS: true,
    });
  });
};

exports.getProductDetail = (req, res, next) => {
  res.render("shop/product-detail", {
    pageTitle: "Product Detail",
    path: "/detail",
    activeShop: true,
    productCSS: true,
  });
};

exports.getCheckout = (req, res, next) => {
  res.render("shop/checkout", {
    pageTitle: "Checkout",
    path: "/checkout",
  });
};

exports.getCarts = (req, res, next) => {
  res.render("shop/cart", {
    pageTitle: "My Cart",
    path: "/cart",
    activeShop: true,
  });
};

exports.getIndex = (req, res, next) => {
  res.render("shop/index", {
    pageTitle: "My Store",
    path: "/",
    activeShop: true,
  });
};
