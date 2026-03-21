import { Request, Response } from 'express'; 
// import database as well 
const clientPrefController = async (req: Request, res: Response) => { 
    res.json({ 
        Client: 'This is the route that gets the data needed from a client regarding property purchase'
    }); 
}; 

export default clientPrefController; 

