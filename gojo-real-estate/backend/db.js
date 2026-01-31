const mongoose = require("mongoose");

const MONGO_URL = process.env.MONGO_URL;

function connectDB() {
  mongoose
    .connect(MONGO_URL)
    .then(() => console.log("✅ MongoDB connected"))
    .catch(err => console.error("❌ MongoDB error:", err));
}

module.exports = connectDB;
