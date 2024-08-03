import express from "express";
import db from "./db.js";
import bodyParser from "body-parser";
import personRoutes from "./routes/personRoutes.js";
import menuRoutes from "./routes/menuRoutes.js";
import * as dotenv from "dotenv";
dotenv.config();

const app = express();
const port = process.env.PORT || 3000;
app.use(bodyParser.json());

// routes
app.use("/person", personRoutes);
app.use("/menu", menuRoutes);

app.get("/", (req, res) => {
  res.send("It is just a Home Page");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
