const express = require("express");
const app=express();

app.get("/",(req,res)=>
{
    res.send("hallo");
})

const battleRouter = require("./routes/battle")
app.use("/battle",battleRouter);

app.listen(3000);