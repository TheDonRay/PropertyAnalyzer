// initialize a mongodb connection here // set up DB as well.
import mongoose from "mongoose";
const URI = process.env.URI;

/*Why do we have to check?                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  
  TypeScript doesn't know what's in your .env file at compile time. So it types process.env.ANYTHING as string | undefined to be safe — the variable might simply not exist in the environment. mongoose.connect() only accepts string, so TypeScript forces you to   
  resolve that uncertainty before passing it in.
*/

if (URI === undefined) {
  throw new Error("Error URI is undefined please define a valid URI");
}

const databaseConnection = async () => {
  try {
    await mongoose.connect(URI);
    console.log("Database successfully connected");
  } catch (error) {
    throw new Error("Error connecting to mongoDB Database");
  }
};

export default databaseConnection;
