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

    app.post('/record', (req, res) => {
        console.log(req.body);
        res.status(200).json({ message: 'Data received' });
        const { date,moreve, email, a1, a2, a3, a4, a5 } = req.body;
        // Assuming `db` is your database object
        db.collection('responses').add({
            date, email, moreve, answers: { a1, a2, a3, a4, a5 }
        }).then(() => res.status(200).send("Data saved successfully")).catch((error) => res.status(500).send("Error saving data: " + error));
    });
});
