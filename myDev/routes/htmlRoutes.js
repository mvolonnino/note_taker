// DEPENDENCIES
const path = require("path");

module.exports = function (app) {
  // HTML GET Requests
  // Below code handles when users "visit" a page

  app.get("/notes", function (req, res) {
    console.log("get /notes");
    res.sendFile(path.join(__dirname, "../public/notes.html"));
  });

  // If no matching route is found default to home
  app.get("*", function (req, res) {
    console.log("get *");
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });
};
