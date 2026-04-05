import { Request, Response } from 'express'; 
import OpenAi from 'openai'; 

// add openai api key to the .env folder in the backend 
const openai = new OpenAi({ 
    apiKey: process.env.OPENAIKEY
});  

interface clientAddress { 
    Useraddress: string
}; 

const PropertyAnalysisController = (Address : clientAddress, req: Request, res: Response) => { 
    res.status(200).json({ 
        Message: "Controller is set up for analysis need openai api set up and call external function here"
    }); 
}

export default PropertyAnalysisController; 