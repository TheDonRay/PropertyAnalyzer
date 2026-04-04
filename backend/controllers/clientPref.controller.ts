import { Request, Response } from "express";
// import database as well

// import external service function here as such -> define the service function.
import organizedData from "../services/externalapifunction.service.js";

const clientpropdataController = async (req: Request, res: Response) => {
  // get user address data here as such
  try {
    const address = req.query.address;
    // research better way to validate addresses.
    if (!address) {
      throw new Error("Error not valid address");
    }
    console.log("valid address", address);
    // call the function here
    const propertyData = await organizedData({
      UserAddress: address as string,
    }); // calls the external API function to get property data
    console.log("External API function called");
    res.json(propertyData);
  } catch (error) {
    console.error("There was an error reading your address", error);
  }
};

export default clientpropdataController;
