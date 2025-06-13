const express =  require('express');
const PORT = process.env.PORT || 2000;
const app = express();
const bookRouter = require('./routes/books')
const userRouter = require('./routes/users')
require('dotenv').config();
app.use(express.json());
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

app.listen(PORT ,()=>{
    console.log(`app is listining : ${PORT}`)
})

app.use(bodyParser.urlencoded({
    extended:true
}))
app.use(bodyParser.json())

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*"); // Allow all domains
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
    res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");
    next();
  });

app.use('/books',bookRouter)
app.use('/users',userRouter)

mongoose.connect(process.env.DB_CONNECTION_URL, ).then(() =>{
    console.log("mongoDb is connected to database")
}).catch((error) =>{
    console.log(error)
})