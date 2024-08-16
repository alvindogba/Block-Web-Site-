import express from "express"; //Package to create server and handle http request
import bodyParser from "body-parser"; // package to parse the request bodies into req.body


const app = express(); // express obj
const port = 4000; // port for my API to run on

const posts = [
    {
        id: 1,
        Tittle: "Why did the hospital start hiring more computers and tech experts?",
        Date: "Aug/15/2024",
        Content: "Because they realized their patients needed more than just good care; they needed to improve their byte recovery. After all, in the digital age, even hospitals need to keep up with the latest tech trends to avoid any system failures!"
    },

    {
        id: 2,
        Tittle: "Why did the dog sit in the shade during the hot summer day?",
        Date: "Dec/25/2024",
        Content: "Because it didn’t want to be a hot dog! It knew that staying cool was key to enjoying the day, especially when it came to fetching balls and playing outside. So, the dog lounged under a big tree, sipping water from its bowl and dreaming of endless games, all while staying comfortably cool and avoiding any unnecessary barking in the heat."
    },

    {
        id: 3,
        Tittle: "Why did the rat bring a suitcase to the party?",
        Date: "may/5/2024",
        Content: "Because it heard the party was going to be a real cheese fest and wanted to be prepared for a long stay. It planned to mingle with the other guests, sample all the cheeses, and maybe even dance to a few tunes. After all, when you’re a rat, you’ve got to make sure you’re not just a guest—you're the life of the party!"
    }
]



//Setting up middlewares to handle request bodies
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

//Route to get all post
app.get("/posts", (req, res)=>{ 
    res.json(posts)
})

//Route to get a specific post
app.get("/posts:id", (req, res)=>{
    const foundPost = posts.find((post)=> post.id === parseInt(req.params.id) );
    if(!foundPost) res.send("post not found");
    res.json(foundPost)
    console.log(foundPost)
})



let lastId= 3;
//Creating route to handle post request
app.post("/newpost", (req, res)=>{
    lastId += 1;  //always incremenet the lastId by 1 every time this endpoint is meet
    const {Tittle, Date, Content}=req.body; //extract the values from the req.body
    if(!Tittle || !Date || !Content){
       res.status(404).json({error: "Something is missing"})
    }
    const response={
        id: lastId,
        Tittle,
        Date,
        Content
    };
    res.json(response)
})




app.listen(port, ()=>{
    console.log(`API Is Running on port ${port}`)
})