const express = require("express");
const router = express.Router();
const {userRegister,userLogin,getUser,updateUser,deleteUser,adminLogin,adminRegister} = require("../controller/userController");

router.post("/userRegister",userRegister);
router.post("/userLogin",userLogin);
router.post("/adminLogin",adminLogin);
router.post("/adminRegister",adminRegister);
router.get("/getUser",getUser);
router.post("/updateuser/:id",updateUser);
router.delete("/deleteuser/:id",deleteUser)


module.exports = router;    