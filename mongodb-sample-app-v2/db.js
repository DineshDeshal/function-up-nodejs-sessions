const { MongoClient } = require('mongodb');

const dbUri = 'mongodb+srv://vishal-thakre-db-1:aXP!Qdn8.r8Bm4b@democluster.a6ar2ia.mongodb.net/?retryWrites=true&w=majority&appName=demoCluster';

let db;

async function connectToDatabase() {
    const client = new MongoClient(dbUri);
    try {
        await client.connect();
        console.log('Connected to MongoDB');
        db = client.db('tasks');
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
    }
}

function getDB() {
    if (!db) {
        throw new Error('Database connection has not been established');
    }
    return db;
}

module.exports = { connectToDatabase, getDB };
