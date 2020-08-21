// DEPENDENCIES
const path = require("path");

function htmlRoutes(app){
  // HTML GET Requests
  // Below code handles when users "visit" a page

  app.get("/notes", function(req, res){
    res.sendFile(path.join(__dirname, "../public/notes.html"))
  })

  // If no matching route is found default to home
  app.get("*", function(req, res){
    res.sendFile(path.join(__dirname, "../public/index.html"))
  })
}

module.exports = htmlRoutes;