const express =  require('express');
const app = express();
const cors = require("cors");
const port = 3002;

app.use(express.json());


const mongoose = require('mongoose');
const url = "mongodb://127.0.0.1:27017/";
const dbName = "FoodOrderingSystem";

mongoose.connect(url + dbName, {
    useNewUrlParser : true,
    useUnifiedTopology : true
})
.then( ()=> {
    console.log('Sucessfully Connected');
})
.catch((err)=> {
    console.log('err');
});

const userRouter = require("./route/customer");
const orderRouter = require("./route/order");
const restaurantRouter = require('./route/restaurant');
const adminFoodRouter = require('./route/adminFoodRoute');
const adminRouter = require('./route/admin');

app.use(cors());
app.use(express.json());
//For Customer
app.use("/customer", userRouter);
//For Ordering by Customer creating and other
app.use("/restaurantorders", orderRouter);
//For Restaurant creating and other
app.use('/restaurant', restaurantRouter);
//For handlin order by admin
app.use('/admin-food-router', adminFoodRouter);
//for admin
app.use('/admin', adminRouter);


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });

