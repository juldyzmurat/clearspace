import dotenv from 'dotenv';
dotenv.config();
import express from "express";
import cors from "cors";
import { connectDB, getDB} from './db/connection.js';  // Import the connectDB function
import records from "./routes/record.js";


const PORT = process.env.PORT || 5050;
const app = express();

app.use(cors());
app.use(express.json());

connectDB().then(() => {
    app.use("/record", records);

    // Start the Express server
    app.listen(PORT, () => {
        console.log(`Server listening on port ${PORT}`);
    });
});
