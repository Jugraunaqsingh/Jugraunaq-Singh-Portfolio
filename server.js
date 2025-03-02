// const express = require("express");
// const cors = require("cors");
// const dotenv = require("dotenv");

// //dotenv configuartion
// dotenv.config();

// //rest object
// const app = express();

// //midlewares
// app.use(cors());
// app.use(express.json());

// //routes
// app.use("/api/v1/portfolio", require("./routes/portfolioRoute"));

// //port
// const PORT = process.env.PORT || 8080;

// //listen
// app.listen(PORT, () => {
//   console.log(`Server Runnning On PORT ${PORT} `);
// });


const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const path = require("path");

// Load environment variables
dotenv.config();

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// API Routes
app.use("/api/v1/portfolio", require("./routes/portfolioRoute"));

// Serve static files from the React app
app.use(express.static(path.join(__dirname, "client", "build")));

// Catch-all handler: For any request that doesn't match above, send back React's index.html
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});

// Port
const PORT = process.env.PORT || 8080;

// Listen
app.listen(PORT, () => {
  console.log(`Server Running On PORT ${PORT}`);
});
