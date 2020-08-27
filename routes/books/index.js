const routes = require("express").Router();
const db = require("../../models");

routes.get("/", (req, res) => {
  db.Book.findAll().then((result) => res.json(result));
});

routes.get("/:bookId", (req, res) => {
  db.Book.findByPk(req.params.bookId).then((result) => res.json(result));
});

module.exports = routes;
