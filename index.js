// App.js
const express = require("express");
const cors = require("cors"); //import cors package
const rabbitRoutes = require("./rabbits/routes/rabbits.routes");

const app = express();
const port = 7070;

app.use(cors()); //set the cors header for all request-origins! not recommended for production!

/* Routes */
app.use("/rabbits", rabbitRoutes);

app.listen(port, () =>
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`)
);
