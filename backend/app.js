//imports
import express from "express";
import dotenv from "dotenv";
import authRoute from "./routes/auth.route.js";
import connectToDB from "./utils/Db.js";
import cors from "cors";

//variables
dotenv.config();
const app = express();
const PORT = process.env.PORT;
connectToDB();

//middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);
app.use("/api/auth", authRoute);

//Server running
app.listen(PORT, (req, res) => {
  console.log(`Server is running on ${PORT}`);
});
