// mongoCLient is the method to establish connection to mongodb database
// mongodb driver
const { MongoClient } = require('mongodb');

const dbUri = 'mongodb+srv://vishal-thakre-db-1:aXP!Qdn8.r8Bm4b@democluster.a6ar2ia.mongodb.net/?retryWrites=true&w=majority&appName=demoCluster';

let db;

async function connectToDatabase() {
    const client = new MongoClient(dbUri);
    try {
        console.log(client);
        await client.connect();
        console.log('Connected to mongodb 1');
        db = client.db('tasks');
    }
    catch (err) {
        console.log(err);
    }
}

function getDB() {
    if (!db) {
        throw new Error('DB connection has not been established.')
    }
    return db;
}

module.exports = { connectToDatabase, getDB }











