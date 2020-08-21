let dbJSON = require("../db/db.json");

console.log("dbJSON: ", dbJSON);

module.exports = function (app) {
  // API GET requests
  // In each of the below cases when a user vists a link, they are shown a JSON of the data

  app.get("/api/notes", function (req, res) {
    res.json(dbJSON);
  });

  app.post("/api/notes", function (req, res) {
    console.log("req.body: ", req.body);
    dbJSON.push(req.body);
    res.json(true);
  });

  app.post("/api/clear", function (req, res) {
    dbJSON = [];

    res.json({ cleared: true, dbJSON });
  });
};
