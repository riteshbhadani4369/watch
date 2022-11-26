const mongoose = require("mongoose");

const cartSchema = mongoose.Schema({

    product_id: {
        type: String,
        required: true
    },
    user_id: {
        type: String,
        required: true
    }

});
const cart = mongoose.model("cart", cartSchema);

module.exports = cart;
