const dbJSON = require("../db/db.json");

console.log("dbJSON: ", dbJSON);

module.exports = function (app) {
  // API GET requests
  // In each of the below cases when a user vists a link, they are shown a JSON of the data

  app.get("/api/notes", function (req, res) {
    res.json(dbJSON);
  });
};
