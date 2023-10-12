const express = require("express");
const app = express();
const path = require("path");

app.listen(3000,()=>{
    console.log("servidor ejecutandose en el puerto 300")
})


app.get("/",(req,res)=>{
    res.sendFile(path.join(__dirname,"/views/index.html"));
})

app.use(express.static("public"));