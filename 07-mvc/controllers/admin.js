const Product = require("../models/product");

exports.getAddProduct = (req, res, next) => {
  res.render("admin/add-product", {
    pageTitle: "Add Product",
    path: "/admin/add-product",
    formsCSS: true,
    productCSS: true,
    activeAddProduct: true,
  });
};

exports.postAddProduct = (req, res, next) => {
  const product = new Product(req.body.title);
  product.save();
  res.redirect("/");
};

exports.getEditProduct = (req, res, next) => {
  res.render("admin/edit-product", {
    pageTitle: "Edit Product",
    path: "/admin/edit-product",
    formsCSS: true,
    productCSS: true,
    activeAddProduct: true,
  });
};

exports.getProducts = (req, res, next) => {
  Product.fetchAll((products) => {
    res.render("admin/product-list", {
      prods: products,
      pageTitle: "Admin Product",
      path: "/admin/products",
      hasProducts: products.length > 0,
      activeShop: true,
      productCSS: true,
    });
  });
};
