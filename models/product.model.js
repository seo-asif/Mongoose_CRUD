const mongose = require("mongoose");

const productSchecma = new mongose.Schema(
  {
    name: {
      type: String,
      require: true,
      min: 4,
    },
    category: {
      type: String,
      require: true,
    },
  },
  {
    timestamps: true,
  }
);

const product = mongose.model("product", productSchecma);

module.exports = product;
