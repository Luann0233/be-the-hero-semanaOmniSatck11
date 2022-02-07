const express = require("express");
const routes = express.Router();

const OngController = require("./controllers/ong-controller");
const IncidentController = require("./controllers/incident-controller");
const ProfileController = require("./controllers/profile-controller");
const SessionController = require("./controllers/session-controller");

routes.post("/sessions", SessionController.create);

routes.get("/ongs", OngController.index);
routes.post("/ongs", OngController.create);

routes.get("/profile", ProfileController.index);

routes.get("/incidents", IncidentController.index);
routes.post("/incidents", IncidentController.create);
routes.delete("/incidents/:id", IncidentController.delete);

module.exports = routes;
