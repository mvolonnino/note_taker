// Dependencies
const express = require("express");

// Tells node that we are creating an express erver
const app = express();

// set the initial port
const PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Set up ROUTES to map through our HTML and backened API
require("./Develop/routes/apiRoutes")(app);
require("./Develop/routes/htmlRoutes")(app);

// Listener
app.listen(PORT, function () {
  console.log("🚀 App listening on PORT 🔥: ", PORT);
});
