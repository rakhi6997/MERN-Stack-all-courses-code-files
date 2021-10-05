const express = require("express");
const cors = require("cors");

var corsOptions = {
  origin: "http://localhost:4000",
};

const dotenv = require("dotenv");
dotenv.config();

const app = express();

app.use(cors(corsOptions));

app.get("/", (req, res) => {
  res.json({ message: "Integration of Node-React." });
});

app.get("/demo-integration", (req, res) => {
  res.json({ message: "Integration of Node-React is now done." });
});

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
