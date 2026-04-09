// get request route because we are fetching property analysis from the backend
import { Router } from "express";
import propertyAnalysisController from "../controllers/propertyanalysis.controller.js";

const propertyanalysis = Router();

propertyanalysis.get("/analysis", propertyAnalysisController);

export default propertyanalysis;
