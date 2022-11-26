const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/product").then(() => {
    console.log("mongodb is connected");
}).catch(() => {
    console.log("mongodb is not connected");
});