import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import router from "./routes/productRout.js";

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());

app.use("/api/products", router);

app.listen(port, () => {
  connectDB(); 
  console.log("server started at http://localhost:" + port);
});
