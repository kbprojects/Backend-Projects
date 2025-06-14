import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

import studentRoutes from "./routes/studentRoutes.js";
import examRoutes from "./routes/examRoutes.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Parsing request body
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Connecting to a MongoDB database
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to MongoDB database!"))
  .catch((err) => console.error("Error connecting to database:", err));

app.use("/api/students", studentRoutes);
app.use("/api/exams", examRoutes);

app.get("/", (req, res) => {
  res.send("Students API!");
});

// Basic error handling for undefined routes
app.use((req, res, next) => {
  const error = new Error("Not Found");
  error.status = 404;
  next(error);
});

// General error handling middleware
app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.json({
    error: {
      message: error.message,
    },
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
