const express = require('express');
const router = express.Router();
const {getTechniques,getTemplates,getLearnableTechniques,getEffects} =require("../services/dbService")

router.get('/',async (req,res)=>
{
    var techDBResponse=await getTechniques(req.params.id);
    var tempDBResponse=await getTemplates(req.params.id);
    var learnableTechDBResponse=await getLearnableTechniques(req.params.id);
    var effectsDBResponse=await getEffects(req.params.id);

    res.send({"techniques":techDBResponse,
        "musician_templates":tempDBResponse,
        "learnable_techniques":learnableTechDBResponse,
        "effects":effectsDBResponse});
})

module.exports=router