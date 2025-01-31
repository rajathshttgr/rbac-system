const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv").config();
const dbConnect = require("./src/config/dbConnect");
const authRoutes = require("./src/routes/authRoutes");

dbConnect();
const app = express();

//Middleware
app.use(express.json());

//Allow requests from all origins
app.use(cors());

//Routes
app.use("/api/auth", authRoutes);
app.use("/", (req, res) => {
  res.send("Welcome to the RBAC system");
});

//start the server
const PORT = process.env.PORT || 7002;
app.listen(PORT, () => {
  console.log(`Server is running on the PORT ${PORT}`);
});
