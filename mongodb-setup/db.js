const { MongoClient } = require('mongodb');

// const dbUri = 'mongodb+srv://vishalthakre18:DAWOUQTfiBkL2Awh@cluster0.jvliriy.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

const dbUri = 'mongodb+srv://vishal-thakre-db-1:4xOGV3cHrhPZf9yj@democluster.a6ar2ia.mongodb.net/users?retryWrites=true&w=majority&appName=demoCluster'

let db;

async function connectToDatabase() {
    const client = new MongoClient(dbUri);
    try {
        await client.connect();
        console.log('Connected to MongoDB');
        db = client.db('users');
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
    }
}

function getDB() {
    return db;
}

module.exports = { connectToDatabase, getDB };
