import { Request, Response } from "express";
// import database as well 

// import external service function here as such -> define the service function. 
import {externalapifunction}  from '../services/externalapifunction.service.js'

const clientpropdataController = async (req: Request, res: Response) => {
  // get user address data here as such 
  try { 
    const address = req.body;  
    if (!address || address.length === 0) { 
      
    }

  } catch (error) { 

  }
  // call the user function here as such 
};

export default clientpropdataController;
