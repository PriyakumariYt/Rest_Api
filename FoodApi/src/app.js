const express = require('express');
const app = express();
const path = require('path');
const port = process.env.PORT || 8000;
const FoodData = require('./models/FoodLIst');
const conn = require('./db/conn');
// const router = require("./routers/user")
app.use(express.json());

app.post("/FoodList",async (req, res)=>{
    try{
     const addingDetail =  new FoodData(req.body)
     console.log(req.body)
    const insert =  await addingDetail.save();
    res.status(201).send(insert)
    }catch(e){
res.status(400).send(e)
    }
})
// HANDLING IN GET RQUEST IN REST API
app.get("/FoodList",async (req, res)=>{
    try{
 const getUser =  await FoodData.find({}).sort({"id":1});
    res.send(getUser);
    }catch(e){
res.status(400).send(e)
    }
})
// handling fetch data individual particular one data
app.get("/FoodList/:id",async (req, res)=>{
    try{
        const _id = req.params.id;
 const getUserOne =  await FoodData.findById(_id);
    res.send(getUserOne);
    }catch(e){
res.status(400).send(e)
    }
})

// HANDLING WITH PATCH METHOD IN UPDATE
app.patch("/FoodList/:id",async (req, res)=>{
    try{
        const _id = req.params.id;
 const getUserUpdate =  await FoodData.findByIdAndUpdate(_id,req.body,{
    new:true
 });
    res.send(getUserUpdate);
    }catch(e){
res.status(500).send(e)
    }
})
// HANDLING WITH DELETE REQUEST METHOD 
app.delete("/FoodList/:id",async (req, res)=>{
    try{
        const _id = req.params.id;
 const getUserDelete =  await FoodData.findByIdAndDelete(_id);
    res.send(getUserDelete);
    }catch(e){
res.status(500).send(e)
    }
})

// insertmany
// const foodDataArray = [
//  {
//         "id": 27,
//         "image": "https://images.pexels.com/photos/12664777/pexels-photo-12664777.jpeg?auto=compress&cs=tinysrgb&w=600",
//         "name": "Bread 3",
//         "category": "Sandwich",
//         "price": "12₹",
//         "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, at consectetur totam voluptatibus quibusdam iusto. Accusamus quas, soluta ipsam autem eius necessitatibus fugiat in."
//       },
//       {
//         "id": 28,
//         "image": "https://images.pexels.com/photos/13689793/pexels-photo-13689793.jpeg?auto=compress&cs=tinysrgb&w=600",
//         "name": "Bread 2",
//         "category": "Sandwich",
//         "price": "12₹",
//         "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, at consectetur totam voluptatibus quibusdam iusto. Accusamus quas, soluta ipsam autem eius necessitatibus fugiat in."
//       },
//       {
//         "id": 29,
//         "image": "https://images.pexels.com/photos/13689826/pexels-photo-13689826.jpeg?auto=compress&cs=tinysrgb&w=600",
//         "name": "Bread 1",
//         "category": "Sandwich",
//         "price": "12₹",
//         "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, at consectetur totam voluptatibus quibusdam iusto. Accusamus quas, soluta ipsam autem eius necessitatibus fugiat in."
//       },
//       {
//         "id": 30,
//         "image": "https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=600",
//         "name": "Daal Chawal 3",
//         "category": "Lunch",
//         "price": "12₹",
//         "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, at consectetur totam voluptatibus quibusdam iusto. Accusamus quas, soluta ipsam autem eius necessitatibus fugiat in."
//       },
    
//       {
//         "id": 31,
//         "image": "https://images.pexels.com/photos/674574/pexels-photo-674574.jpeg?auto=compress&cs=tinysrgb&w=600",
//         "name": "Daal Chawal 2",
//         "category": "Lunch",
//         "price": "12₹",
//         "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, at consectetur totam voluptatibus quibusdam iusto. Accusamus quas, soluta ipsam autem eius necessitatibus fugiat in."
//       },
//       {
//         "id": 32,
//         "image": "https://images.pexels.com/photos/262959/pexels-photo-262959.jpeg?auto=compress&cs=tinysrgb&w=600",
//         "name": "DaalChawall",
//         "category": "Lunch",
//         "price": "12₹",
//         "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, at consectetur totam voluptatibus quibusdam iusto. Accusamus quas, soluta ipsam autem eius necessitatibus fugiat in."
//       },
//       {
//         "id": 33,
//         "image": "https://images.pexels.com/photos/2313686/pexels-photo-2313686.jpeg?auto=compress&cs=tinysrgb&w=600",
//         "name": "Daal Chawal 1",
//         "category": "Lunch",
//         "price": "12₹",
//         "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, at consectetur totam voluptatibus quibusdam iusto. Accusamus quas, soluta ipsam autem eius necessitatibus fugiat in."
//       },
//       {
//         "id": 34,
//         "image": "https://images.pexels.com/photos/1320917/pexels-photo-1320917.jpeg?auto=compress&cs=tinysrgb&w=600",
//         "name": "Daal Chawal Rice",
//         "category": "Lunch",
//         "price": "12₹",
//         "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, at consectetur totam voluptatibus quibusdam iusto. Accusamus quas, soluta ipsam autem eius necessitatibus fugiat in."
//       },
//       {
//         "id": 35,
//         "image": "https://images.pexels.com/photos/16138674/pexels-photo-16138674/free-photo-of-clementines-on-table.jpeg?auto=compress&cs=tinysrgb&w=600",
//         "name": "Anna 1",
//         "category": "Fruits",
//         "price": "12₹",
//         "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, at consectetur totam voluptatibus quibusdam iusto. Accusamus quas, soluta ipsam autem eius necessitatibus fugiat in."
//       },
//       {
//         "id": 36,
//         "image": "https://images.pexels.com/photos/7195133/pexels-photo-7195133.jpeg?auto=compress&cs=tinysrgb&w=600",
//         "name": "Annanas",
//         "category": "Fruits",
//         "price": "12₹",
//         "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, at consectetur totam voluptatibus quibusdam iusto. Accusamus quas, soluta ipsam autem eius necessitatibus fugiat in."
//       },
//       {
//         "id": 37,
//         "image": "https://images.pexels.com/photos/61127/pexels-photo-61127.jpeg?auto=compress&cs=tinysrgb&w=600",
//         "name": "Annai",
//         "category": "Fruits",
//         "price": "12₹",
//         "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, at consectetur totam voluptatibus quibusdam iusto. Accusamus quas, soluta ipsam autem eius necessitatibus fugiat in."
//       },
//       {
//         "id": 38,
//         "image": "https://images.pexels.com/photos/750073/pexels-photo-750073.jpeg?auto=compress&cs=tinysrgb&w=600",
//         "name": "Pizza Sausi",
//         "category": "FastFood",
//         "price": "12₹",
//         "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, at consectetur totam voluptatibus quibusdam iusto. Accusamus quas, soluta ipsam autem eius necessitatibus fugiat in."
//       },
//       {
//         "id": 39,
//         "image": "https://images.pexels.com/photos/3023476/pexels-photo-3023476.jpeg?auto=compress&cs=tinysrgb&w=600",
//         "name": "Pizzass",
//         "category": "FastFood",
//         "price": "12₹",
//         "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, at consectetur totam voluptatibus quibusdam iusto. Accusamus quas, soluta ipsam autem eius necessitatibus fugiat in."
//       },
//     {
//         "id": 40,
//         "image": "https://images.pexels.com/photos/5792329/pexels-photo-5792329.jpeg?auto=compress&cs=tinysrgb&w=600",
//         "name": "Pizza Hurt",
//         "category": "FastFood",
//         "price": "12₹",
//         "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, at consectetur totam voluptatibus quibusdam iusto. Accusamus quas, soluta ipsam autem eius necessitatibus fugiat in."
//       },
//       {
//         "id": 41,
//         "image": "https://images.pexels.com/photos/10790638/pexels-photo-10790638.jpeg?auto=compress&cs=tinysrgb&w=600",
//         "name": "Veg Pizza",
//         "category": "FastFood",
//         "price": "12₹",
//         "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, at consectetur totam voluptatibus quibusdam iusto. Accusamus quas, soluta ipsam autem eius necessitatibus fugiat in."
//       },
//       {
//         "id": 42,
//         "image": "https://images.pexels.com/photos/13814644/pexels-photo-13814644.jpeg?auto=compress&cs=tinysrgb&w=600",
//         "name": "Pizzas",
//         "category": "FastFood",
//         "price": "12₹",
//         "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, at consectetur totam voluptatibus quibusdam iusto. Accusamus quas, soluta ipsam autem eius necessitatibus fugiat in."
//       },
//       {
//         "id": 43,
//         "image": "https://images.pexels.com/photos/905847/pexels-photo-905847.jpeg?auto=compress&cs=tinysrgb&w=600",
//         "name": "Pizza",
//         "category": "FastFood",
//         "price": "12₹",
//         "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, at consectetur totam voluptatibus quibusdam iusto. Accusamus quas, soluta ipsam autem eius necessitatibus fugiat in."
//       },
//       {
//         "id": 44,
//         "image": "https://images.pexels.com/photos/2474661/pexels-photo-2474661.jpeg?auto=compress&cs=tinysrgb&w=600",
//         "name": "Dinner Food 4",
//         "category": "Dinner",
//         "price": "12₹",
//         "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, at consectetur totam voluptatibus quibusdam iusto. Accusamus quas, soluta ipsam autem eius necessitatibus fugiat in."
//       },
//       {
//         "id": 45,
//         "image": "https://images.pexels.com/photos/2819094/pexels-photo-2819094.jpeg?auto=compress&cs=tinysrgb&w=600",
//         "name": "Dinner Food 3",
//         "category": "Dinner",
//         "price": "12₹",
//         "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, at consectetur totam voluptatibus quibusdam iusto. Accusamus quas, soluta ipsam autem eius necessitatibus fugiat in."
//       },
//       {
//         "id": 46,
//         "image": "https://images.pexels.com/photos/5835353/pexels-photo-5835353.jpeg?auto=compress&cs=tinysrgb&w=600",
//         "name": "Dinner Food 2",
//         "category": "Dinner",
//         "price": "12₹",
//         "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, at consectetur totam voluptatibus quibusdam iusto. Accusamus quas, soluta ipsam autem eius necessitatibus fugiat in."
//       },
//       {
//         "id": 46,
//         "image": "https://images.pexels.com/photos/6183640/pexels-photo-6183640.jpeg?auto=compress&cs=tinysrgb&w=600",
//         "name": "Dinner Food 1",
//         "category": "Dinner",
//         "price": "12₹",
//         "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, at consectetur totam voluptatibus quibusdam iusto. Accusamus quas, soluta ipsam autem eius necessitatibus fugiat in."
//       },
//       {
//         "id": 47,
//         "image": "https://images.pexels.com/photos/7438982/pexels-photo-7438982.jpeg?auto=compress&cs=tinysrgb&w=600",
//         "name": "dinner food",
//         "category": "Dinner",
//         "price": "12₹",
//         "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, at consectetur totam voluptatibus quibusdam iusto. Accusamus quas, soluta ipsam autem eius necessitatibus fugiat in."
//       },
//       {
//         "id": 48,
//         "image": "https://images.pexels.com/photos/9332172/pexels-photo-9332172.jpeg?auto=compress&cs=tinysrgb&w=600",
//         "name": "Pink Cake",
//         "category": "Desert",
//         "price": "12₹",
//         "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, at consectetur totam voluptatibus quibusdam iusto. Accusamus quas, soluta ipsam autem eius necessitatibus fugiat in."
//       },
//       {
//         "id": 49,
//         "image": "https://images.pexels.com/photos/14705134/pexels-photo-14705134.jpeg?auto=compress&cs=tinysrgb&w=600",
//         "name": "Vanii cake",
//         "category": "Desert",
//         "price": "12₹",
//         "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, at consectetur totam voluptatibus quibusdam iusto. Accusamus quas, soluta ipsam autem eius necessitatibus fugiat in."
//       },
//       {
//         "id": 50,
//         "image": "https://images.pexels.com/photos/5137026/pexels-photo-5137026.jpeg?auto=compress&cs=tinysrgb&w=600",
//         "name": "Soft Cake",
//         "category": "Desert",
//         "price": "12₹",
//         "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, at consectetur totam voluptatibus quibusdam iusto. Accusamus quas, soluta ipsam autem eius necessitatibus fugiat in."
//       },
//       {
//         "id": 51,
//         "image": "https://images.pexels.com/photos/14430245/pexels-photo-14430245.jpeg?auto=compress&cs=tinysrgb&w=600",
//         "name": "CupCake",
//         "category": "Desert",
//         "price": "12₹",
//         "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, at consectetur totam voluptatibus quibusdam iusto. Accusamus quas, soluta ipsam autem eius necessitatibus fugiat in."
//       },
//       {
//         "id": 52,
//         "image": "https://images.pexels.com/photos/11148670/pexels-photo-11148670.jpeg?auto=compress&cs=tinysrgb&w=600",
//         "name": "Vanila cake",
//         "category": "Desert",
//         "price": "12₹",
//         "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, at consectetur totam voluptatibus quibusdam iusto. Accusamus quas, soluta ipsam autem eius necessitatibus fugiat in."
//       }
//     ]
// // FoodData.collection.dropIndex({ "name": 1 })

// FoodData.insertMany(foodDataArray)
//   .then((result) => {
//     console.log("Documents inserted successfully:", result);
//   })
//   .catch((error) => {
//     console.error("Error inserting documents:", error);
//   });

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
  });