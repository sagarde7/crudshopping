require("dotenv").config();
const express=require("express");
const app=express();
const mongoose=require("mongoose");
const Product=require("./models/product.models.js")
const ProductRoute=require("./routes/product.route.js")
// const serverless = require('serverless-http');

// we cannot pass json through node js by default
// so use middleware
app.use(express.json());
app.use(express.urlencoded({extended:false}))

app.use("/api/products",ProductRoute);

app.get("/",(req,res)=>{
  res.send("hello from crud")
});


mongoose.connect(process.env.MONGODB_URI)
  .then(() => {console.log('Connected! to DB')
  app.listen(process.env.PORT,()=>{
    console.log(`http://localhost:${process.env.PORT}`);
    
})
}
)
  .catch(err=>{
    console.log("error");
    
});

// module.exports.handler = serverless(app);
