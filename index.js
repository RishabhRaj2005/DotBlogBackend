import express from 'express';
import Connection  from './databse/db.js';
import dotenv from 'dotenv';
import Router from './routes/route.js'
import cors from 'cors';
import bodyParser from 'body-parser';

dotenv.config();

const app = express();

app.use(cors());
app.use(bodyParser.json({extended: true}))
app.use(bodyParser.urlencoded({extended: true}))
app.use('/', Router);


const PORT = process.env.PORT || 8000;


app.listen(PORT,()=>console.log(`Server is running on port ${PORT}`));


Connection();

//mongodb+srv://rishabhrajfeb22:42uuOxAuqaQnmRfl@cluster0.0nwbrce.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0