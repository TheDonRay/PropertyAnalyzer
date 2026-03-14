import 'dotenv/config'; 
import app from './app.js';  

//database connection can go here as well. 

const PORT = process.env.PORT;  

app.listen(PORT, () => { 
    console.log(`Server Successfully running on http://localhost:${PORT}`);
}); 

