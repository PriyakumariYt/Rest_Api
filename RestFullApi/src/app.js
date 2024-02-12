const express = require('express');
const app = express();
const path = require('path');
const port = process.env.PORT || 8000;
const UserDetail = require('./models/userDetail');
const conn = require('./db/conn');
// const router = require("./routers/user")
app.use(express.json());
// app.use(router)

app.post("/userDetail",async (req, res)=>{
    try{
     const addingDetail =  new UserDetail(req.body)
     console.log(req.body)
    const insert =  await addingDetail.save();
    res.status(201).send(insert)
    }catch(e){
res.status(400).send(e)
    }
})
// HANDLING IN GET RQUEST IN REST API
app.get("/userDetail",async (req, res)=>{
    try{
 const getUser =  await UserDetail.find({}).sort({"id":1});
    res.send(getUser);
    }catch(e){
res.status(400).send(e)
    }
})
// handling fet data individual particular one data
app.get("/userDetail/:id",async (req, res)=>{
    try{
        const _id = req.params.id;
 const getUserOne =  await UserDetail.findById(_id);
    res.send(getUserOne);
    }catch(e){
res.status(400).send(e)
    }
})

// HANDLING WITH PATCH METHOD IN UPDATE
app.patch("/userDetail/:id",async (req, res)=>{
    try{
        const _id = req.params.id;
 const getUserUpdate =  await UserDetail.findByIdAndUpdate(_id,req.body,{
    new:true
 });
    res.send(getUserUpdate);
    }catch(e){
res.status(500).send(e)
    }
})
// HANDLING WITH DELETE REQUEST METHOD 
app.delete("/userDetail/:id",async (req, res)=>{
    try{
        const _id = req.params.id;
 const getUserDelete =  await UserDetail.findByIdAndDelete(_id);
    res.send(getUserDelete);
    }catch(e){
res.status(500).send(e)
    }
})
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
  });