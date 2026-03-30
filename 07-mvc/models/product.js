const fs = require("fs");
const path = require("path");

// Buat directory "/data/products.json"
const productPath = path.join(
  path.dirname(process.mainModule.filename),
  "data",
  "products.json",
);

const getProductFromFile = (cb) => {
  fs.readFile(productPath, (err, data) => {
    if (err) {
      cb([]);
    } else {
      cb(JSON.parse(data));
    }
  });
};

class Product {
  constructor(title) {
    this.title = title;
  }

  save() {
    getProductFromFile((products) => {
      // Push data baru dari instance object
      products.push(this);
      // Write file ke json
      fs.writeFile(productPath, JSON.stringify(products, null, 2), (err) => {
        if (err) console.error(err);
      });
    });
  }

  static fetchAll(cb) {
    getProductFromFile(cb);
  }
}

module.exports = Product;
