const db = require("../models");

module.exports = function (app) {
    app.get("/api/get-todolist", function (req, res) {
        db.Todo.findAll({}).then(function (data) {
            res.json(data);
        })
    })

    app.post("/api/add-todolist", function (req, res) {
        db.Todo.create(req.body).then(function (data) {
            res.json(data);
        })
    })
    app.put("/api/update-todolist", function (req, res) {
        console.log(req.complete);
        db.Todo.update({
            complete: true
        }, {
            where: {
                id: req.body.id
            }
        })
    })
}