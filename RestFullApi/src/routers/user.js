const express = require('express')
const router = new express.Router()
const UserDetail = require('./models/userDetail');

// we will handle post request

router.post("/userDetail",async (req, res)=>{
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
router.get("/userDetail",async (req, res)=>{
    try{
 const getUser =  await UserDetail.find({}).sort({"id":1});
    res.send(getUser);
    }catch(e){
res.status(400).send(e)
    }
})
// handling fet data individual particular one data
router.get("/userDetail/:id",async (req, res)=>{
    try{
        const _id = req.params.id;
 const getUserOne =  await UserDetail.findById(_id);
    res.send(getUserOne);
    }catch(e){
res.status(400).send(e)
    }
})

// HANDLING WITH PATCH METHOD IN UPDATE
router.patch("/userDetail/:id",async (req, res)=>{
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
router.delete("/userDetail/:id",async (req, res)=>{
    try{
        const _id = req.params.id;
 const getUserDelete =  await UserDetail.findByIdAndDelete(_id);
    res.send(getUserDelete);
    }catch(e){
res.status(500).send(e)
    }
})
module.exports = router