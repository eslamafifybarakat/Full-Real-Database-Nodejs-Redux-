
const mongoose = require("mongoose");
const url = "mongodb+srv://Eslam:b36!RghBU97.gT5@cluster0.mv6b9.mongodb.net/taskFullReact?retryWrites=true&w=majority";
mongoose.connect( url,{ useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false })
  .then(() => {
    console.log("Server started....");
  })
  .catch((error) => {
    console.log("Server is Down....!");
  });
mongoose.set("useFindAndModify", false);
module.exports = mongoose;

// const mongoose = require('mongoose');
// const url = "mongodb+srv://Eslam:b36!RghBU97.gT5@cluster0.mv6b9.mongodb.net/assessmentFullReact?retryWrites=true&w=majority";
// mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });