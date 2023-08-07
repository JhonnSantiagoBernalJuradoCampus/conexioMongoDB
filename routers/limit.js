import { ObjectId } from "mongodb";
import con from "../db/atlas.js"
import { limitGrt } from "../middleware/config.js";
import { Router } from "express";
const appCampus = Router();

appCampus.get("/", limitGrt(), async(req,res)=>{
    if(!req.rateLimit) return;
    console.log(req.rateLimit);
    let { id } = req.body;
    let db = await con();
    let usuario = db.collection("usuario");
    let result = await usuario.find({_id: ObjectId(id)}).toArray();
    res.send(result);
});

export default appCampus;