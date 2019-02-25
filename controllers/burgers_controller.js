const express = require("express");
const burger = require("../models/burger");

let router = express.Router();

router.get("/", function (req, res) {
    burger.allUnDev(function (data) {
        let hbsObj = { burgers: data };
        res.render("index", hbsObj);
    });
});

router.post("/api/new", function (req, res) {
    // console.log(req.body);

    burger.create(req.body.name, function (result) {
        // Send back the ID of the new quote
        res.json({ id: result.insertId });
    });
});

router.put("/api/burgers/:id", function (req, res) {
    let id = "id = " + req.params.id;

    burger.update(
        req.body.devoured,
        id,
        function(result) {
          if (result.changedRows === 0) {
            // If no rows were changed, then the ID must not exist, so 404
            return res.status(404).end();
          }
          res.status(200).end();
    
        }
      );
});

module.exports = router;