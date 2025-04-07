const mongoose=require("mongoose");
const ProductSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    quantity:{
        type:Number,
        default:0
    },
    price:{
        type:Number,
        required:true,
        default:0
    },
    image:{
        type:String,
        required:false
    }
},{
    timestamps:true
}

);

module.exports = mongoose.model('Product', ProductSchema);

