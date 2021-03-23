const express = require("express");
const cors = require("cors");
const port = process.env.PORT || 3001;
const routes = require("./api/routes/todoListRoutes");

const app = express();
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
routes(app);

app.listen(port);

console.log("API server started on: " + port);
