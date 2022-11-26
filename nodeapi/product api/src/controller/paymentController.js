require('dotenv').config();
const uniqeId = require('uniqid')
const Razorpay = require('razorpay')

var instance = new Razorpay({
    key_id: process.env.KEY_ID,
    key_secret: process.env.KEY_SECRET,
  });
  
const createorder = async(req,res) =>{
    try {

        var options = {
            amount: 50000,
            currency: "INR",
            receipt: uniqeId(),
        }
        instance.orders.create(options,functions(err, order))
        {
            if(err)
            {
               return  res.status(500).json({
                    error:err
                })
            }
            res.json(order);
        }
    } catch (error) {
        res.status(401).send(error);
    }
}
module.exports = { createorder };