import mongoose from "mongoose";

const mongoUrl = "mongodb://localhost:27017/hotels";

mongoose.connect(mongoUrl, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on("connected", () => console.log("connected to db"));
db.on("error", () => console.error("connected to db"));
db.on("disconnected", () => console.log("disconnected from db"));

export default db;
