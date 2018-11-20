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

    app.put("/api/check-todolist/:id", function (req, res) {
        db.Todo.update({
            complete: 1
        }, {
                where: {
                    id: req.params.id
                }
            }).then(function (data) {
                res.json(data);
            })
    })

    app.put("/api/uncheck-todolist/:id", function (req, res) {
        db.Todo.update({
            complete: 0
        }, {
                where: {
                    id: req.params.id
                }
            }).then(function (data) {
                res.json(data);
            })
    })
}