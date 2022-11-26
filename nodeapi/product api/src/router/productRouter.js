const express = require("express");
const router = express.Router();
const { createProduct,menwatch,gethomeproduct,womenwatch, getproduct,getsingleproduct ,userSelectProduct,updateproduct,deleteproduct} = require("../controller/productController");


router.post("/createproduct", createProduct);
router.get("/menwatch", menwatch);
router.get("/womenwatch", womenwatch);
router.get("/getallproduct",getproduct);
router.get("/getsingleproduct/:id",getsingleproduct);
router.get("/gethomeproduct",gethomeproduct);
router.get("/userSelectProduct/:id",userSelectProduct);
router.post("/updateproduct/:id",updateproduct);
router.delete("/deleteproduct/:id",deleteproduct);

module.exports = router;