import express from "express";
import dotenv from "dotenv";
import appCampus from "./routers/limit.js"
// import connectionDB from "./db/config.js";
dotenv.config();
const app = express();

// let db = await connectionDB();
app.use("/campus", appCampus);

const config = JSON.parse(process.env.MY_CONFIG);
app.listen(config, ()=>{
    console.log(`http://${config.hostname}:${config.port}`);
});