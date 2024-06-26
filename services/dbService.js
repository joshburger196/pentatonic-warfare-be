const mySql =require("mysql2");
const dotenv=require("dotenv");
dotenv.config();

const pool = mySql.createPool(
{
    host:process.env.sqlHost,
    user:process.env.sqlUser,
    password:process.env.sqlPassword,
    database:process.env.sqlDBName,
    port:process.env.sqlPort
}).promise(console.log("db connection done"));

async function getAccountInfo(accountId)
{
    const [[[queryResponse]]] = await pool.query(`CALL get_account_info(?)`,accountId);
    console.log(`I'm getAccountInfo and I'm returning:${JSON.stringify(queryResponse)}`);
    return queryResponse;
}

async function getAccountMusicians(accountId)
{
    const [[queryResponse]] = await pool.query(`CALL get_account_musicians(?)`,accountId);
    console.log(`I'm getAccountMusicians and I'm returning:${JSON.stringify(queryResponse)}`);
    return queryResponse;
}

async function getTechniques(accountId)
{
    const [[queryResponse]] = await pool.query(`CALL get_techniques()`);
    console.log(`I'm getTechniques and I'm returning:${JSON.stringify(queryResponse)}`);
    return queryResponse;
}

async function getTemplates(accountId)
{
    const [[queryResponse]] = await pool.query(`CALL get_templates()`);
    console.log(`I'm getTechniques and I'm returning:${JSON.stringify(queryResponse)}`);
    return queryResponse;
}

async function getLearnableTechniques(accountId)
{
    const [[queryResponse]] = await pool.query(`CALL get_learnable_techniques()`);
    console.log(`I'm getTechniques and I'm returning:${JSON.stringify(queryResponse)}`);
    return queryResponse;
}

async function getEffects(accountId)
{
    const [[queryResponse]] = await pool.query(`CALL get_effects()`);
    console.log(`I'm getTechniques and I'm returning:${JSON.stringify(queryResponse)}`);
    return queryResponse;
}

module.exports={getAccountInfo,getAccountMusicians,getTechniques,getTemplates,getLearnableTechniques,getEffects}