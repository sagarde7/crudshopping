const express=require("express");
const router=express.Router();
const Product=require("../models/product.models.js")
const {getProducts,createProducts,getoneProduct,editProduct,deleteProduct}=require("../controllers/product.controller.js")
router.get("/",getProducts);
router.get("/:id",getoneProduct);
router.post("/",createProducts);
router.put("/:id",editProduct);
router.delete("/:id",deleteProduct);

module.exports=router;