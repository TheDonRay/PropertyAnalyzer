import { Router } from "express";
import clientpropdataController from "../controllers/clientPref.controller.js";
// instantiate the route here as such
const clientpropdata = Router();

clientpropdata.post("/clientpropertydata", clientpropdataController);

export default clientpropdata;
