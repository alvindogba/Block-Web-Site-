import express from 'express';
import bodyParser from 'body-parser';

const serverApp = express();
const port = 3000; //Port to run my WebSit 



// Set EJS as the view engine
serverApp.set('view engine', 'ejs');


serverApp.get("/", (req, res)=>{
    res.render("index.ejs")
})

serverApp.listen(port, ()=>{
    console.log(`Server is Running on port ${port}`)
})
