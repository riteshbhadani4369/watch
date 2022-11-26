const cart = require("../model/cartModel");

const addtocart = async (req, res) => {
    try {

        // const pid = req.params.id;
        // const userId = req.user.id;

        // console.log(pid);
        // const findcartproduct = await products.findById(userId);
        // res.status(200).send(findcartproduct);



        const createcart = new cart({
            product_id: req.body.product_id,
            user_id: req.body.user_id,
        })
        const response = await createcart.save();
        res.status(201).send(response);
    } catch (error) {
        res.status(401).send(error.message);
    }
}

module.exports = {addtocart};