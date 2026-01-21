const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();





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



mongoose.connect(
     "mongodb+srv://vivekkumar94293377_db_user:tYggHkFIY1W11Adv@cluster0.vhrssnk.mongodb.net/nav")

.then(() => console.log("MongoDB Atlas Connected"))
.catch(err => console.error("MongoDB connection error:", err));



// Server
const PORT = process.env.PORT || 3000;
// const port = 3000;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});






