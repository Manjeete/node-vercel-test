const express = require("express");

const app = express()

app.get("/",(req,res) =>{
    res.status(200).json({
        status:"Server is working..."
    })
})

app.listen(8000, () =>{
    console.log("works")
})