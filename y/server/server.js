import dotenv from 'dotenv';
dotenv.config();
import express from "express";
import cors from "cors";
import { connectDB, getDB} from './db/connection.js';  // Import the connectDB function
import records from "./routes/record.js";


const PORT = process.env.PORT || 5050;
const app = express();

app.use(cors({
    origin: '*' // Adjust this to match your client's origin or use '*' for wide open access (not recommended for production)
}));
app.use(express.json());

connectDB().then(() => {
    const db = getDB();  // Ensure this actually retrieves the database instance successfully
    console.log("db instance");
    console.log(db);
    if (!db) {
        console.error('No database instance returned.');
        return;
    }

    app.use("/record", records);

    app.listen(PORT, () => {
        console.log(`Server listening on port ${PORT}`);
    });

    app.post('/record', (req, res) => {
        console.log('Received data:', req.body);
        const { date, moreve, email, a1, a2, a3, a4, a5 } = req.body;
        db.collection('responses').insertOne({
            date, email, moreve, answers: { a1, a2, a3, a4, a5 }
        }).then(() => {
            console.log('Data saved successfully');
            res.status(200).json({ message: "Data saved successfully" });
        }).catch((error) => {
            console.error('Error saving data:', error);
            res.status(500).send("Error saving data: " + error.message); // Provide error message to the client
        });
    });

    app.get('/habittracker', (req, res) => {
        const { month, year, email } = req.query;
    
        db.collection('habittracker').findOne({ email, month, year }).then(doc => {
            if (!doc) {
                // No document found, create a new one
                const daysInMonth = new Date(year, month, 0).getDate(); // `month` is 1-indexed
                const currentMonth = Array.from({ length: daysInMonth }, (_, i) => i + 1);
                const newDoc = {
                    email,
                    month,
                    year,
                    currentMonth: currentMonth, 
                    filledDays: {},  // Initialize with no filled days
                    createdAt: new Date()  // Store the creation date
                };
    
                // Insert the new document into the database
                db.collection('habittracker').insertOne(newDoc).then(result => {
                    console.log('Created new habit tracker entry:', newDoc);
                    return res.status(201).json(newDoc);  // Return the newly created document
                }).catch(error => {
                    console.error('Error creating new habit tracker entry:', error);
                    return res.status(500).json({ error: "Error creating habit tracker entry", details: error.message });
                });
            } else {
                // Document exists, return it
                return res.status(200).json(doc);
            }
        }).catch(error => {
            console.error('Error retrieving habit tracker data:', error);
            res.status(500).json({ error: "Error retrieving habit tracker data", details: error.message });
        });
    });
    

    app.post('/habittracker', (req, res) => {
        console.log('Received habit tracker data:', req.body);
        const { month, year, email, filledDays } = req.body; // Adjust these fields based on your client-side data structure
    
        // Create a new document for the habit tracker
        const habitTrackerDoc = {
            month,
            year,
            email,
            filledDays,
            createdAt: new Date() // Store the current date and time as the creation date
        };
    
        // Insert the document into the "habittracker" collection
        db.collection('habittracker').insertOne(habitTrackerDoc).then(() => {
            console.log('Habit tracker data saved successfully');
            res.status(200).json({ message: "Habit tracker data saved successfully" });
        }).catch((error) => {
            console.error('Error saving habit tracker data:', error);
            res.status(500).json({ error: "Error saving habit tracker data", details: error.message });
        });
    });

}).catch(err => {
    console.error('Failed to connect to the database:', err);
});
