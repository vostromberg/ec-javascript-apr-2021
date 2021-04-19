const express = require("express");
const cors = require("cors");
const port = process.env.PORT || 3002;
const routes = require("./api/routes/itemRoutes");

const app = express();
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
routes(app);

app.listen(port);

console.log("Generic Item API server started on: " + port);
