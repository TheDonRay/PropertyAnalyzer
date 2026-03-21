import { Router, Request, Response } from 'express';  
import clientPrefController from '../controllers/clientPref.controller.js'; 
// instantiate the route here as such 
const clientPref = Router();    


clientPref.get('/clientpreference', clientPrefController); 

export default clientPref; 


