const Product=require("../models/product.models.js")

const getProducts=async(req,res)=>{
    try{
      const products=await Product.find({});
      res.status(200).json(products);
    }
    catch(err){
      res.status(500).json({message:err});
    }
}
const createProducts=async(req,res)=>{
  try{
    const createdProduct=await Product.create(req.body);
    res.status(200).json(createdProduct);
  }
  catch(err){
    console.log("error");
    res.status(500).json({message:err.message});
    
  }
}

const getoneProduct=async(req,res)=>{
  try{
    const id=req.params.id;
    const products=await Product.find({"_id":id});
    res.status(200).json(products);
  }
  catch(err){
    res.status(500).json({message:err});
  }
}

const editProduct=async(req,res)=>{
  try{
    const id=req.params.id;
    const products=await Product.findByIdAndUpdate({"_id":id},req.body);
    if(!products){
      res.status(400).json({message:"Product not found"});
    }
    const updatedProduct=await Product.findById({"_id":id});
    res.status(200).json(updatedProduct);
  }
  catch(err){
    res.status(500).json({message:err});
  }
}

const deleteProduct=async(req,res)=>{
  try{
    const id=req.params.id;
    const products=await Product.findByIdAndUpdate({"_id":id},req.body);
    if(!products){
      return res.status(400).json({message:"Product not found"});
    }
    const updatedProduct=await Product.findById({"_id":id});
    res.status(200).json(updatedProduct);
  }
  catch(err){
    res.status(500).json({message:err});
  }
}

module.exports={
    getProducts,
    createProducts,
    getoneProduct,
    editProduct,
    deleteProduct
}