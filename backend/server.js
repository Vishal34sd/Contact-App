import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./src/config/db.js";
import contactRoutes from "./src/routes/contactRoutes.js";

dotenv.config();

const PORT = process.env.PORT ;
connectDB();

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/contacts", contactRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
