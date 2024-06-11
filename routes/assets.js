const express = require('express');
const router = express.Router();
const {getTechniques} =require("../services/dbService")

router.get('/',async (req,res)=>
{
    var techDBResponse=await getTechniques(req.params.id);
    

    res.send({"techniques":techDBResponse});
})

module.exports=router