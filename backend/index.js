import dotenv from 'dotenv';
dotenv.config();
import connectDB from './src/db/connectDB.js';
import {app} from './app.js';


app.listen(process.env.PORT || 3000, () => {
    connectDB();
    console.log(`Server is running on port ${process.env.PORT || 3000}`);   
});