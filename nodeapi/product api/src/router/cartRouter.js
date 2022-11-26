const express = require("express");
const router = express.Router();
const { addtocart } = require("../controller/cartController");

router.post('/addtocart',addtocart)

module.exports = router;