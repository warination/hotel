import mongoose from "mongoose";
import * as dotenv from "dotenv";
dotenv.config();
// const mongoUrl = "mongodb://localhost:27017/hotels";
const mongoUrl = process.env.DB_URL;

mongoose.connect(mongoUrl, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on("connected", () => console.log("connected to db"));
db.on("error", () => console.error("connected to db"));
db.on("disconnected", () => console.log("disconnected from db"));

export default db;
