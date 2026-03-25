import { Request, Response } from "express";
// import database as well

// import external service function here as such -> define the service function.
import  externalapifunction from "../services/externalapifunction.service.js";

const clientpropdataController = async (req: Request, res: Response) => {
  // get user address data here as such
  try {
    const address = req.body;
    // research better way to validate addresses.
    if (!address) {
      throw new Error("Error not valid address");
    }
    console.log("valid address");
    // call the function here
    externalapifunction(address); 
    console.log('External API function called'); 
  } catch (error) {
    console.error("There was an error reading your address", error);
  }
};

export default clientpropdataController;
