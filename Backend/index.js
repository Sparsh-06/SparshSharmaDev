const express = require("express");
const { MongoClient, ServerApiVersion } = require("mongodb");
const cors = require("cors");
const app = express();
require("dotenv").config();
const port = 3200;

app.use(cors());
app.use(express.json());

//

const uri =
  'mongodb+srv://itssparshiii:sparshsharmadev@sparshdev.ylnb9tw.mongodb.net/userMessage';

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });

    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);

app.post("/api/contact", async (req, res) => {
  const { name, email, message } = req.body;

  try {
    // Connect to the MongoDB database
    await client.connect();

    // Get a reference to the database and collection
    const db = client.db("usersMessage");
    const collection = db.collection("message");

    // Data to be inserted
    const formData = {
      name,
      email,
      message,
    };

    // Insert data into the collection
    const result = await collection.insertOne(formData);

    // Log success and return a response
    console.log("Form data inserted:", result.insertedId);
    res.json({ message: "Form submitted successfully" });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "An error occurred" });
  } finally {
    // Close the MongoDB client connection
    await client.close();
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
