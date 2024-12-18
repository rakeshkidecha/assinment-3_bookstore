const mongoose = require('mongoose');

const multer = require('multer');
const path = require('path');
const imagePath = '/uploads';

const BookSchema = mongoose.Schema({
    title:{
        type : String,
        required : true
    },
    author:{
        type : String,
        required : true
    },
    price:{
        type : Number,
        required : true
    },
    stock:{
        type : Number,
        required : true
    },
    genre:{
        type : Array,
        required : true
    },
    rating:{
        type : Number,
        required : true
    },
    publishedDate:{
        type : String,
        required : true
    },
    publisher:{
        type : String,
        required : true
    },
    coverImage:{
        type : String,
        required : true
    },
    decsription:{
        type : String,
        required : true
    },
})

const imageStorage = multer.diskStorage({
    destination : (req,file,cb)=>{
        cb(null,path.join(__dirname,"..",imagePath))
    },
    filename : (req,file,cb)=>{
        cb(null,file.fieldname+'-'+Date.now());
    },
})

BookSchema.statics.uploadImageFile = multer({storage:imageStorage}).single('coverImage');
BookSchema.statics.imgPath = imagePath;

const Book = mongoose.model('Book',BookSchema);

module.exports = Book;