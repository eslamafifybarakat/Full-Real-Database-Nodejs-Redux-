var multer  = require('multer')
const mongoose = require('./db_connection')
const User = require('../models/user');
const multerConfig = multer.diskStorage({
    destination: (req, file, callback) => {
      callback(null, 'public/images');
    },
    filename: (req, file, callback) => {
        console.log(file)
      const ext = file.mimetype.split('/')[1];
      callback(null,file.originalname);
    },
  });
  
  const onlyImage = (req, file, callback) => {
    if (file.mimetype.startsWith('image')) {
      callback(null, true);
    } else {
      callback(new Error('Only Jpeg Image Allowed'));
    }
  };
  
  const upload = multer({
    storage: multerConfig,
    fileFilter: onlyImage,
  });
  exports.upload = (req, res,next) => {
    if (!req.file) {
      console.log('Something Went Wrong');
    }
    try {
        let dataInserted = req.body
        // console.log(req.body)
        console.log(dataInserted)
        User.insertMany(dataInserted);
        res.status(200).json({
            status: 'success',
         });
    }
    catch (error) {
        return next(new Error(err))
    }
  };
  
  exports.uploadPhoto = upload.single('photo');