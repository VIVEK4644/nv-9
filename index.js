const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const { MongoClient, ServerApiVersion } = require('mongodb');




// Middleware
app.use(cors());
app.use(express.json());

// Routes
const UserRouter = require('./router/UserRouter');
app.use('/user', UserRouter);

// MongoDB Connection
mongoose.connect("mongodb://127.0.0.1:27017/nv")
.then(() => {
  console.log("DB Connected");
})
.catch((err) => {
  console.error("DB not connected", err);
});

// Server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});






// mogodb database


const uri = "mongodb+srv://varnwalvivek4644_db_user:<db_password>@cluster0.m19arsn.mongodb.net/?appName=Cluster0";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);
