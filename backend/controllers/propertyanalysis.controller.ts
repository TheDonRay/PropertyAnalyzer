import { Request, Response } from "express";
import organizedData from "../services/externalapifunction.service.js";
import OpenAi from "openai";

const client = new OpenAi({
  apiKey: process.env.OPENAIKEY,
});

interface clientAddress {
  UserAddress: string;
}

const PropertyAnalysisController = async (
  Address: clientAddress,
  req: Request,
  res: Response,
) => {
  // set up try and catch case here as such
  try {
    // get the data here as such remember that organizedData expects a object to be passed through.
    const organizedDataFetched = await organizedData(Address);
    if (!organizedDataFetched) {
      return res.status(404).send("Error fetching organized data payload");
    }
    // if data is valid go ahead and send to the api for analysis and completion
    // remember to stringify incoming data since its being outputted as an object
    const aiPropertyAnalysis = await client.chat.completions.create({
      model: "gpt-4o",
      messages: [
        {
          role: "system",
          content:
            "Act as a real estate advisor. Using the property data for the given address, determine whether the property is a good investment. If it is, explain the reasons in very simple, easy-to-understand terms for someone without a real estate or technical background. If it isn’t, provide a clear and detailed explanation, also in simple terms, so a non-expert can fully understand why.",
        },
        {
          role: "user",
          content: `here is the property data for the given address: ${JSON.stringify(organizedDataFetched)}`,
        },
      ],
    });
    if (!aiPropertyAnalysis) {
      return res.status(404).send("Error getting AI Analysis on property data");
    }
    return res
      .status(200)
      .send(
        `Data Successfully Analyzed here’s what we think about the property based of the data provided: ${aiPropertyAnalysis.choices[0].message.content}`,
      );
  } catch (error) {
    return res
      .status(500)
      .send("Error getting organized Data payload and AI analysis");
  }
};

export default PropertyAnalysisController;
