import express from "express";

const app = express();
const port = 3000;


app.get('/', (req, res) =>{
    res.send("let's create the project 🔥")
})

app.listen(port, ()=>{
    console.log(`server is running at ${port}`);
})