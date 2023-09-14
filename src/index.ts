import 'dotenv/config'
import { MongoClient } from 'mongodb';

//excerpts from https://www.mongodb.com/languages/javascript/mongodb-and-npm-tutorial

export async function executeStudentCrudOperations() {
    const uri = process.env.DB_URI;
 
    let mongoClient = new MongoClient(uri as string);
    try {
        console.log('Connecting to MongoDB ...');
        await mongoClient.connect();
        const db = mongoClient.db('school');
        const collection = db.collection('students');
        const studentDocument = {
            name: 'John Smith',
            birthdate: new Date(2000, 11, 20),
            address: { street: 'Pike Lane', city: 'Los Angeles', state: 'CA' },
        };
     
        await collection.insertOne(studentDocument);
    } finally {
        await mongoClient.close();
    }
 }

 executeStudentCrudOperations(); 
