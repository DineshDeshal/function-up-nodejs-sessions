const { MongoClient } = require('mongodb');

// Schema structure documented in code
const userSchema = {
    name: 'string',
    age: 'number',
    email: 'string'
};

// Simple validation function
function validateUser(user) {
    for (const key in userSchema) {
        if (typeof user[key] !== userSchema[key]) {
            throw new Error(`User property ${key} must be of type ${userSchema[key]}`);
        }
    }
    // Add any additional validation rules here
}

// Function to insert a new user that first validates the user
async function insertUser(db, user) {
    validateUser(user);
    const result = await db.collection('users').insertOne(user);
    return result;
}

// Connect to MongoDB and use the validation function
const url = 'mongodb+srv://vishal-thakre-db-1:4xOGV3cHrhPZf9yj@democluster.a6ar2ia.mongodb.net/users?retryWrites=true&w=majority&appName=demoCluster';
const client = new MongoClient(url);

async function main() {
    await client.connect();
    console.log('Connected successfully to server');
    const db = client.db('users');

    const newUser = {
        name: 'Jane Doe',
        age: 30,
        email: 'jane@example.com'
    };

    try {
        await insertUser(db, newUser);
        console.log('User inserted');
    } catch (e) {
        console.error('Error inserting user:', e.message);
    }

    return 'done.';
}

main()
    .then(console.log)
    .catch(console.error)
    .finally(() => client.close());
