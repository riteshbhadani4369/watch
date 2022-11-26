const express = require('express');
const router = express.Router();
const {createorder}  = require("../controller/paymentController");

router.get('/createorder', createorder);


module.export = router;