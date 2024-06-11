const express = require('express');
const cors = require("cors");
const dotenv=require("dotenv");
dotenv.config();

const app=express();
const port = process.env.BEPort;
const FEDomain=process.env.FEDomain;
app.use(cors());


app.get("/",(req,res)=>
{
    res.send("hallo");
})

const battleRouter = require("./routes/battle")
app.use("/battle",battleRouter);

const accountRouter = require("./routes/account")
app.use("/account",accountRouter);

const assetsRouter = require("./routes/assets")
app.use("/assets",assetsRouter);

app.listen(3000);