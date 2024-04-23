import { MongoClient, ServerApiVersion } from "mongodb";
const URI = "mongodb+srv://zxu4:O0KQTS7VjXuxmTfR@cluster0.5hi6an8.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
if (!URI) {
    console.error('MongoDB connection string is missing in the environment variables.');
    process.exit(1);
}

const client = new MongoClient(URI, {
    serverApi: ServerApiVersion.v1,
});

let dbConnection;

async function connectDB() {
    try {
        await client.connect();
            console.log("Successfully connected to MongoDB.");
            dbConnection = client.db("clearspace");  // This should match your database name
    } catch (err) {
        console.error("Failed to connect to MongoDB", err);
        process.exit(1);
    }
}

function getDB() {
    if (!dbConnection) {
        throw new Error("No database connection.");
    }
    return dbConnection;
}

export { connectDB, getDB };

