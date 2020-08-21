// Dependencies
const express = require("express");

// Tells node that we are creating an express erver
const app = express();

// set the initial port
const PORT = process.env.PORT || 3000;

// sets up the pathway to public so that we only need to specify the sub folders inside of assests when we link our src's in html pages
app.use(express.static("./myDev/public"));

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Set up ROUTES to map through our HTML and backened API
require("./mydev/routes/apiRoutes")(app);
require("./mydev/routes/htmlRoutes")(app);

// Listener
app.listen(PORT, function () {
  console.log("🚀 App listening on PORT: ", PORT);
});
