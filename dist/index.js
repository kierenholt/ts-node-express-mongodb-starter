"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.executeStudentCrudOperations = void 0;
require("dotenv/config");
const mongodb_1 = require("mongodb");
//excerpts from https://www.mongodb.com/languages/javascript/mongodb-and-npm-tutorial
function executeStudentCrudOperations() {
    return __awaiter(this, void 0, void 0, function* () {
        const uri = process.env.DB_URI;
        let mongoClient = new mongodb_1.MongoClient(uri);
        try {
            console.log('Connecting to MongoDB ...');
            yield mongoClient.connect();
            const db = mongoClient.db('school');
            const collection = db.collection('students');
            const studentDocument = {
                name: 'John Smith',
                birthdate: new Date(2000, 11, 20),
                address: { street: 'Pike Lane', city: 'Los Angeles', state: 'CA' },
            };
            yield collection.insertOne(studentDocument);
        }
        finally {
            yield mongoClient.close();
        }
    });
}
exports.executeStudentCrudOperations = executeStudentCrudOperations;
executeStudentCrudOperations();
//# sourceMappingURL=index.js.map