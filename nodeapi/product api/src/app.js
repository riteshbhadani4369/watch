const express =  require("express");
require("./dbconnect/connect");
const port = process.env.PORT || 5000
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');

const corsOptions ={
    origin:'http://localhost:3000', 
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200
}
app.use(cors(corsOptions));
app.use(bodyParser.json());

const userRouter = require("./router/userRouter");
const productRouter = require("./router/productRouter");
// const paymentRoute = require("./router/paymentRoute.js")

app.use(express.json());
app.use(userRouter);
app.use(productRouter);
// app.use(paymentRoute);

app.listen(port,() => {
    console.log("this site port number "+port);
});