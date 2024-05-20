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
    const [queryResponse] = await pool.query(`CALL get_account_info(?)`,accountId);
    console.log(`I'm getAccountInfo and I'm returning:${JSON.stringify(queryResponse)}`);
    return queryResponse;
}

async function getAccountMusicians(accountId)
{
    const [queryResponse] = await pool.query(`CALL get_account_musicians(?)`,accountId);
    console.log(`I'm getAccountMusicians and I'm returning:${JSON.stringify(queryResponse)}`);
    return queryResponse;
}

module.exports={getAccountInfo,getAccountMusicians}