const express = require('express');
const router = express.Router();
const {getAccountInfo,getAccountMusicians} =require("../services/dbService")



router.get('/',(req,res)=>
{
    res.send({"message":"Account"});
})

router.get('/info',(req,res)=>{
    res.send({"Message":"Account info. Please send account id."})
})

router.get('/info/:id',async (req,res)=>
{
    if(isAccountIdValid(req.params.id))
    {
        console.log("account id is valid");
        let [[dbResponse]]=await getAccountInfo(req.params.id);
        console.log(dbResponse);
        res.send({"Account-info":dbResponse});
    }
    else
        res.send({"Error":"Server Error: Input Account Id is invalid. Must start with 'A' and end with 11 numeric digits."})
})

router.get('/musicians/:id',async (req,res)=>
{
    console.log(req.params.id);
    if(isAccountIdValid(req.params.id))
    {
        let [dbResponse]=await getAccountMusicians(req.params.id);
        let resLength=dbResponse.length
        console.log(dbResponse);
        res.send({"n":resLength,"Musicians":dbResponse});
    }
    else
    res.send({"Error":"Server Error: Input Account Id is invalid. Must start with 'A' and end with 11 numeric digits."})
})



function isAccountIdValid(id)
{
    const accountIdPattern = /^A\d{11}$/;
    return accountIdPattern.test(id);
}



module.exports=router