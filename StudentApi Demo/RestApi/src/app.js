const express = require('express');
const app = express();
const path = require('path');
const port = process.env.PORT || 8000;
const Demo = require('./models/demo');
const conn = require('./db/conn');
// const router = require("./routers/user")
app.use(express.json());
// app.use(router)

app.post("/demo",async (req, res)=>{
    try{
     const addingDetail =  new Demo(req.body)
     console.log(req.body)
    const insert =  await addingDetail.save();
    res.status(201).send(insert)
    }catch(e){
res.status(400).send(e)
    }
})
// HANDLING IN GET RQUEST IN REST API
app.get("/demo",async (req, res)=>{
    try{
 const getUser =  await Demo.find({}).sort({"id":1});
    res.send(getUser);
    }catch(e){
res.status(400).send(e)
    }
})
// handling fet data individual particular one data
app.get("/demo/:id",async (req, res)=>{
    try{
        const _id = req.params.id;
 const getUserOne =  await Demo.findById(_id);
    res.send(getUserOne);
    }catch(e){
res.status(400).send(e)
    }
})

// HANDLING WITH PATCH METHOD IN UPDATE
app.patch("/demo/:id",async (req, res)=>{
    try{
        const _id = req.params.id;
 const getUserUpdate =  await Demo.findByIdAndUpdate(_id,req.body,{
    new:true
 });
    res.send(getUserUpdate);
    }catch(e){
res.status(500).send(e)
    }
})
// HANDLING WITH DELETE REQUEST METHOD 
app.delete("/demo/:id",async (req, res)=>{
    try{
        const _id = req.params.id;
 const getUserDelete =  await Demo.findByIdAndDelete(_id);
    res.send(getUserDelete);
    }catch(e){
res.status(500).send(e)
    }
})
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
  });