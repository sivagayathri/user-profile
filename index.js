require("dotenv").config();
const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require("mongoose");

const authRouter = require('./src/routes/authRoutes/authRoutes');
const ProfileRouter = require('./src/routes/profile/profileRoutes');

app.use(express.json());
app.use(cors());

app.use('/auth', authRouter);
app.use('/profile', ProfileRouter);
app.use('/uploads', express.static('uploads'))

const PORT = process.env.PORT || 3000;


mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB Connected");
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch(err => {
    console.error("Mongo connection error:", err);
  });
