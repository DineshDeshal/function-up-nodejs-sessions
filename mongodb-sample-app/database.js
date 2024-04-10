const mongodb = require('mongodb');
const MongodbClient = mongodb.MongoClient;

// vishal-thakre-db-1
// aXP!Qdn8.r8Bm4b

const mongoConnect = (callback) => {
    MongodbClient.connect(
        'mongodb+srv://vishal-thakre-db-1:aXP!Qdn8.r8Bm4b@democluster.a6ar2ia.mongodb.net/?retryWrites=true&w=majority&appName=demoCluster'
    ).then(resp => {
        console.log(resp);
        callback(resp);
    })
        .catch(e => {
            console.log(e);
        })
}

module.exports = mongoConnect;
