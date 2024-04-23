// other imports remain the same
import express from "express";

import { getDB } from "../db/connection.js";

const router = express.Router();

router.get("/", async (req, res) => {
    const db = getDB();  // Get the db connection
    const collection = db.collection("db-s24");  // Ensure this matches your collection name
    try {
        let results = await collection.find({}).toArray();
        res.status(200).send(results);
    } catch (err) {
        console.error(err);
        res.status(500).send("Failed to get records");
    }
});

// Update other endpoints similarly...
export default router;