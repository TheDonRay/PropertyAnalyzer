import "dotenv/config";
import app from "./app.js";

//database connection can go here as well.
import databaseconnection from "./config/dbconnection.config.js";
// invoke the database connection here as such
databaseconnection();

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`Server Successfully running on http://localhost:${PORT}`);
});
