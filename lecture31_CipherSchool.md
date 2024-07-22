
```javascript
const { MongoClient } = require('mongodb');

// Connection URL
const url = 'mongodb://localhost:27017';

// Database Name
const dbName = 'my_database';

// Collection Name
const collectionName = 'my_collection';

// Create a new MongoClient
const client = new MongoClient(url, { useUnifiedTopology: true });

async function main() {
    try {
        // Use connect method to connect to the Server
        await client.connect();
        console.log('Connected correctly to server');

        const db = client.db(dbName);
        const collection = db.collection(collectionName);

        // Insert a document into the collection
        const sampleDocument = {
            name: "John Doe",
            age: 29,
            email: "johndoe@example.com"
        };

        const insertResult = await collection.insertOne(sampleDocument);
        console.log('Document inserted with ID:', insertResult.insertedId);

        // Query the collection
        const documents = await collection.find({}).toArray();
        console.log('Documents found:', documents);
    } catch (err) {
        console.error('Error connecting to MongoDB:', err);
    } finally {
        // Close the connection
        await client.close();
    }
}

main();
```

Here's how the code works:

1. The script starts by importing the `MongoClient` from the `mongodb` package.
2. The connection URL and the database name are defined.
3. A new `MongoClient` instance is created using the connection URL.
4. The `main()` function is an asynchronous function that handles the connection and database operations.
5. Inside the `main()` function:
   - The `client.connect()` method is used to establish a connection to the MongoDB server.
   - The `client.db()` method is used to access the database with the specified name.
   - The `db.collection()` method is used to access the collection with the specified name.
   - A sample document is inserted into the collection using the `collection.insertOne()` method.
   - The collection is queried using the `collection.find()` method, and the resulting documents are logged to the console.
6. Finally, the connection is closed using the `client.close()` method.

To run this script, save it to a file (e.g., `mongo-connection.js`) and execute it using Node.js:

```
node mongo-connection.js
```

This will output the connection status, the inserted document's ID, and the documents found in the collection. 