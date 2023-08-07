import { MongoClient } from "mongodb";
import dotenv from "dotenv";
dotenv.config();

const connectionDB = async ()=>{
    try {
        const uri = `mongodb+srv://${process.env.ATLAS_USER}:${process.env.ATLAS_PASSWORD}@ejemplocluster.p78ttxa.mongodb.net/${process.env.ATLAS_DB}`
        const options = {
            useNewUrlParser: true,
            useUnifiedTopology: true
        };

        const client = await MongoClient.connect(uri,options);
        return client.db()
    } catch (error) {
        return {stats: 500, message: error}
    };
}
export default connectionDB;