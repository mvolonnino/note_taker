let dbJSON = require("../db/db.json");

console.log("dbJSON: ", dbJSON);

module.exports = function (app) {
  // API GET requests
  // In each of the below cases when a user vists a link, they are shown a JSON of the data

  app.get("/api/notes", function (req, res) {
    console.log("get /api/notes");
    res.json(dbJSON);
  });

  app.post("/api/notes", function (req, res) {
    console.log("post /api/notes");
    console.log("req.body: ", req.body);
    // creating new const to add 1 to the last id in the dbJSON
    let newId;
    if (dbJSON.length > 0) {
      newId = dbJSON[dbJSON.length - 1].id + 1;
    } else {
      newId = 1;
    }
    // creating a new obj with the newid, ... takes the old obj and allows us to add an id
    const newJSON = {
      ...req.body,
      id: newId,
      // newId,
    };
    console.log("newJSON: ", newJSON);
    dbJSON.push(newJSON);
    res.json({ dbJSON });
  });

  // delete by ID
  app.delete("/api/notes/:id", function (req, res) {
    console.log("delete /api/notes/:id");
    const { id } = req.params;
    // create a new array by filtering through the old array, if the delete id we click doesnt equal the id found in dbjson, filter it out of the old array and create the new filteredID arr
    const filteredId = dbJSON.filter(function (jsonObj) {
      console.log("jsonObj.id: ", jsonObj.id);
      console.log("id: ", parseInt(id));
      return jsonObj.id !== parseInt(id);
    });

    console.log("filteredId: ", filteredId);
    dbJSON = filteredId;
    res.json(filteredId);
  });

  // Delete all btn -> not in use
  app.post("/api/clear", function (req, res) {
    dbJSON = [];

    res.json({ cleared: true, dbJSON });
  });
};
