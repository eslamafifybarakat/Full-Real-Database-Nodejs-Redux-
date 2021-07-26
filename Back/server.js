const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const app = express();
const port = 3333;
const userRouter = require("./router/userCRUDoperations");

// body parser
app.use(express.json());
// app.use(express.urlencoded());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(morgan("tiny"));

app.use("/assets/images", express.static("./public/images"));

//make Routes for URLs
app.use("/api/user", userRouter);

//Next() => Error
app.use((err, req, res, next) => {
  res.status(404).json({ msg: err });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});











// const port = 8000
// //Upload Image

// // loading connection
// require ('./db_connection')

// //loading model (User) to make CRUD OPeration
// const User = require('./models/user');

// //Install express to use method (get,post, etc)
// const express = require('express')
// const app = express()
// app.use(express.json())

// //to make URL watched
// const cors = require ('cors')
// app.use(cors())

// //get all data
// app.get('/',(req,res,next)=>{
//     User.find({})
//     .then((result)=>{
//         res.status(200).json(result)
//     }).catch((err)=>{
//         res.status(500).json(err.message)
//     })
// })

// //get One by Name
// app.get("/users?", (req, res) => {
//   const { name } = req.query;
//   User.find({ name: `${name}` })
//     .then((user) => {
//       if (!user) res.status(404).json();
//       else res.status(200).json(user);
//     })
//     .catch((err) => console.log(err));
// });
// //get One by _id
// app.get("/get-user/:id", (req, res, next) => {
//   let id = req.params.id;
//   User.find({ _id: id })
//     .then((data) => {
//       res.status(200).json(data);
//     })
//     .catch((err) => {
//       return next(new Error(err));
//     });
// });

// // insert data
// // app.post('/user',upload,uploadPhoto)
// app.post('/user',(req,res)=>{

//     const user=new User({
//         name:req.body.name,
//         email:req.body.email,
//         image:req.body.image
//     })

//     user.save()
//     .then((result)=>{
//     console.log(result)
//     res.status(200).json(result)
//     })
//     .catch((err)=>{
//         res.status(500).json(err.message)
//     })
// })

// //delete one by ID
// app.delete('/user/:id',(req,res,next)=>{
//     User.findByIdAndDelete(req.params.id)
//     .then((result)=>{
//         res.status(200).json(result)
//     })
//     .catch((err)=>{
//         res.status(500).json(err)
//         next()
//     })
// })

// //Update using Put method
// app.put('/user/:id',(req,res,next)=>{
//     let {body} = req;
//     User.findByIdAndUpdate(req.params.id,body)
//      .then((result)=>{
//         res.status(200).json(result)
//     })
//     .catch((err)=>{
//         res.status(500).json(err)
//         next()
//     })
// })

// //Using Patch method
// app.patch('/user/:id',(req,res,next)=>{
//     let {body} = req;
//     User.findOneAndUpdate(req.params.id,body)
//      .then((result)=>{
//         res.status(200).json(result)
//     })
//     .catch((err)=>{
//         res.status(500).json(err)
//         next()
//     })
// })

// app.use((err,req,res,next)=>{
//     res.status(404).json({'msg':err.message})
// })

// app.listen(port, () => {
//     console.log(`Example app listening at http://localhost:${port}`)
// })
