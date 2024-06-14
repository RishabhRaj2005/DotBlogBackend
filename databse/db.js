import mongoose from "mongoose"
import dotenv from "dotenv";

dotenv.config()

const Connection = async () => {
    const URL=process.env.DB_URL;
    try{
        await mongoose.connect(URL,{useNewUrlParser: true});
        console.log(`Database Connected Successfully`);
    }catch(error){
        console.log(`Error while connecting with DB`, error);
    }
}

export default Connection;