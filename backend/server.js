import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./src/config/db.js";
import contactRoutes from "./src/routes/contactRoutes.js";

dotenv.config();

const app = express();


app.use(cors());
app.use(express.json()); // parse JSON
app.use(express.urlencoded({ extended: true })); 


app.use("/api/contacts", contactRoutes);

const PORT = process.env.PORT || 8080;

connectDB();

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
