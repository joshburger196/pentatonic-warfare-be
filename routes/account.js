const express = require('express');
const router = express.Router();
const {getAccountInfo,getAccountMusicians,getAccountBands} =require("../services/dbService")



router.get('/',(req,res)=>
{
    res.send({"message":"Account"});
})

router.get('/:id',async (req,res)=>
{
    if(isAccountIdValid(req.params.id))
    {
        console.log("account id is valid");
        let accInfoDBResponse=await getAccountInfo(req.params.id);
        console.log(accInfoDBResponse);
        let accMusicDBResponse=await getAccountMusicians(req.params.id);
        console.log(accMusicDBResponse);
        let accBandsDBResponse=await getAccountBands(req.params.id);
        console.log(accMusicDBResponse);

        res.send({"account_info":accInfoDBResponse,"account_musicians":accMusicDBResponse,"account_bands":accBandsDBResponse});
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