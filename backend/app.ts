import express from "express";
const app = express();

// import routes
import clientpropdata from "./routes/clientpropdata.route.js";
import propertyanalysis from "./routes/propertyanalysis.route.js";
//set up some middleware here as such
app.use(express.json());

//instantiate the route here as such
app.use("/api/v1/", clientpropdata);
app.use("/api/v1/", propertyanalysis);

// send a set up response as such
app.get("/", (req, res) => {
  res.json({
    Server: "Successfully running",
  });
});

export default app;
