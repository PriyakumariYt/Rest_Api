
const mongoose = require("mongoose");
const validator = require ("validator");
userSchema = mongoose.Schema({
    id:{
        type:Number,
        required:true
    },
  name:{
    type:String,
    required:true,
  unique:true,
  trim:true
},
email:{
    type:String,
    required:true,
    validator(value){
        if(!validator.isEmail(value)){
            throw new Error("invalid email id")
        }
    }
    },
    body:{
        type:String,
        required:true
   
    },
    date: {
        type: Date,
      },

})
// we need collections
const Demo = mongoose.model("Demo",userSchema)

module.exports = Demo; 