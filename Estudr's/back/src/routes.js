const express = require("express");
const routes = express.Router();

const userController = require("./controlers/usersController");

routes.get("/", (request, response) => response.send("Hello World"));
routes.get("/users", userController.index);

module.exports = routes;