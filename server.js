import express from 'express';
import bodyParser from 'body-parser';
import axios from 'axios';



const serverApp = express();
const port = 3000; //Port to run my WebSit 

serverApp.use(bodyParser.json())
serverApp.use(bodyParser.urlencoded({extended: true}));
// Set EJS as the view engine
serverApp.set('view engine', 'ejs');

const api_url = "http://localhost:4000/posts";
serverApp.get("/", async(req, res)=>{
    
        try {
          const response = await axios.get(api_url);
          console.log(response.data);
          const post = response.data;
          res.render("index", {posts: post})
        } catch (error) {
          console.error(error);
        }
      
   
})

serverApp.get("/newpost", (req, res)=>{
    res.render("newpost")
});



serverApp.listen(port, ()=>{
    console.log(`Server is Running on port ${port}`)
})
