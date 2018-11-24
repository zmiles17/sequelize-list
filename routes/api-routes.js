const db = require("../models");

module.exports = function (app) {
    app.get("/api/get-todolist", function (req, res) {
        db.Todo.findAll({})
            .then(function (data) {
                res.json(data);
            })
            .catch(function (err) {
                res.json(err);
            })
    })

    app.post("/api/add-todolist", function (req, res) {
        db.Todo.create(req.body)
            .then(function (data) {
                res.json(data);
            })
            .catch(function (err) {
                res.json(err);
            })
    })

    app.put("/api/check-todolist/:id", function (req, res) {
        db.Todo.update({
            complete: true
        }, {
                where: {
                    id: req.params.id
                }
            })
            .then(function (data) {
                res.json(data);
            })
            .catch(function (err) {
                res.json(err);
            })
    })

    app.delete("/api/delete-todolist/:id", function (req, res) {
        db.Todo.destroy({
            where: {
                id: req.params.id
            }
        })
            .then(function (data) {
                res.json(data);
            })
            .catch(function (err) {
                res.json(err);
            })
    })
}