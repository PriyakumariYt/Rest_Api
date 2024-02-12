const mongoose = require("mongoose");
const validator = require ("validator");
foodSchema = mongoose.Schema({
    id: {
      type: Number,
    required: true,
    unique: true,
      },
      image: {
        type: String,
        required: true,
      },
      name: {
        type: String,
        required: true,
        unique:false,
      },
      category: {
        type: String,
        required: true,
      },
      price: {
        type: String,
        required: true,
      },
      description: {
        type: String,
        required: true,
      },

})
// we need collections
const FoodData = mongoose.model("FoodData",foodSchema)

module.exports = FoodData; 