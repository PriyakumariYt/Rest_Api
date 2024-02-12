const express = require('express');
const app = express();
const path = require('path');
const port = process.env.PORT || 8000;
const StudentDetail = require('./models/student');
const conn = require('./db/conn');

app.use(express.json());

// app.post("/student",async (req, res)=>{
//     try{
//      const addingDetail =  new StudentDetail(req.body)
//      console.log(req.body)
//     const insert =  await addingDetail.save();
//     res.status(201).send(insert)
//     }catch(e){
// res.status(400).send(e)
//     }
// })

// app.listen(port, () => {
//     console.log(`Listening on port ${port}`);
//   });






// POST request
app.post("/student", async (req, res) => {
  console.log('Received data:', req.body);
  try {
    const addingDetail = new StudentDetail(req.body);
    console.log(req.body);
    const insert = await addingDetail.save();
    res.status(201).send(insert);
  } catch (e) {
    res.status(400).send(e);
  }
});

// // Root route
// app.get("/", (req, res) => {
//   res.send("Server is running!");
// });

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});