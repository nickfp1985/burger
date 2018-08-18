const express = require("express");
const bodyParser = require("body-parser");

const PORT = process.env.PORT || 8080;

const app = express();

// serve static content for the app from "public" directory
app.use(express.static("public"));

// parse app
app.use(bodyParser.urlencoded({ extended: true }));

// parse app/json
app.use(bodyParser.json());

// ----- HANDLEBARS -----
const exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// ----- ROUTS AND VIEWER -----
const routes = require("./controllers/burgerController.js");

app.use(routes);

// start server to begin listening to requests
app.listen(PORT, function() {
  // Log (server-side) when our server has started
  console.log("Server listening on: http://localhost:" + PORT);
});
