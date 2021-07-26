const mongoose = require("../helper/db_connection");
const express = require("express");
const User = require("../models/user");
var multer = require("multer");
const { upload, uploadPhoto } = require("../helper/upload");


const userRouter = express.Router();

//Getting All Users
userRouter.get("/allUser", (req, res, next) => {
  User.find({})
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => {
      return next(new Error(err));
    });
});


//Getting Specific User By Name
userRouter.get("/allUser/:name", (req, res, next) => {
  User.find({ name: req.params.name })
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => {
      return next(new Error(err));
    });
});

//Getting Specific User By ID
userRouter.get("/getOneUser/:id", (req, res, next) => {
  User.find({ _id: req.params.id })
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => {
      return next(new Error(err));
    });
});

//Inserting a new User
userRouter.post("/addNewUser", uploadPhoto, upload);

//Updating a Specific User
userRouter.put("/updateUser/:id", (req, res, next) => {
  let dataInserted = req.body;
  let id = req.params.id;
  User.findByIdAndUpdate(id, dataInserted)
    .then(() => {
      res.status(200).json({ success: "Data is Updated" });
    })
    .catch((err) => {
      return next(new Error(err));
    });
});


//Deleting a Specific User
userRouter.delete("/deleteUser/:id", (req, res, next) => {
  let id = req.params.id;
  User.findByIdAndDelete(id)
    .then(() => {
      res.status(200).json({ success: "Data is Deleted" });
    })
    .catch((err) => {
      return next(new Error(err));
    });
});

module.exports = userRouter;
