const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();
const { MongoClient, ServerApiVersion } = require('mongodb');




// Middleware
app.use(cors());
app.use(express.json());

// Routes
const UserRouter = require('./router/UserRouter');
app.use('/user', UserRouter);

// MongoDB Connection
// mongoose.connect("mongodb://127.0.0.1:27017/nv")
// .then(() => {
//   console.log("DB Connected");
// })
// .catch((err) => {
//   console.error("DB not connected", err);
// });


//database
require('dotenv').config();
mongoose.connect(
  "mongodb+srv://vivekkumar94293377_db_user:1EdYnxgqT2WEVd5C@cluster0.vhrssnk.mongodb.net/nv"
)
.then(() => console.log("MongoDB Atlas Connected"))
.catch(err => console.error("MongoDB connection error:", err));



// Server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});






