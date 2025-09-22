// App.js
const express = require("express");

const rabbitRoutes = require("./rabbits/routes/rabbits.routes");

const app = express();
const port = 7070;

/* Routes */
app.use("/rabbits", rabbitRoutes);

app.listen(port, () =>
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`)
);
