const express = require('express');
const path = require('path');
const db = require('./config/db')
const Book = require('./models/Book')
const port = 8002;

const app = express();

app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));

app.use(express.static(path.join(__dirname,'assets')));
app.use(express.urlencoded());
app.use('/uploads',express.static(path.join(__dirname,'uploads')));

app.get('/',async (req,res)=>{
    const allBooks = await Book.find();
    res.render('home',{allBooks});
})

// insert a new book 
app.post('/insertBook',Book.uploadImageFile,async(req,res)=>{
    var imagePath = "";

    if(req.file){
        imagePath = Book.imgPath+'/'+req.
        file.filename;
    }
    req.body.coverImage = imagePath;

    await Book.create(req.body);
    return res.redirect('back');
})

// single book page 
app.get('/singleBook/:bId',async(req,res)=>{
    const singleBook = await Book.findById(req.params.bId);
    return res.render('singleBook',{singleBook})
})

app.listen(port,err=>console.log(err?err:"Server run on http://localhost:"+port));