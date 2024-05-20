const express = require('express');
const router = express.Router();

router.get('/',(req,res)=>
{
    battleObj={"Band":"Band"}
    res.send({"message":"Battle Start","battleObj":battleObj});
})

router.post('/action',(req,res)=>
{
    res.send("Battle action!");
})

module.exports=router