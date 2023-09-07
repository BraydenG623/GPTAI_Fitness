import "./initEnv.cjs";
import OpenAI from "openai";
import express from "express";
import bodyParser from "body-parser";
import cors from "cors";

const openai = new OpenAI({
  organization: "org-EkMW04j2Oc01IKCgosuDkyn7", // This is your organization ID
  apiKey: process.env.OPENAI_API_KEY, // This is also the default, can be omitted
});

const app = express(); // Create express app which will run the server/ express is a framework for nodejs
const port = 3000; // Port to run the server on

//We need this line because we are running the server on a different port than the client and body parser will allow us to parse the JSON body which will be sent by the client
app.use(bodyParser.json()); // Use body parser to parse JSON body which will be sent by the client/ body parser is a middleware for express/ middleware is a function that runs before the main function
app.use(cors()); // Use cors to allow cross origin requests/ cors is a middleware for express // cors and body parser are middlewares and cors is used to allow cross origin requests while body parser is used to parse the JSON body which will be sent by the client
//hand in hand these two middlewares will allow us to make requests from the client to the server

app.use(express.urlencoded({ extended: false })); // Use express.urlencoded to parse URL-encoded bodies (as sent by HTML forms)/ extended: false means that the values of the object will be strings or arrays/ extended: true means that the values of the object can be any type

app.post("/", async (req, res) => {
  const { age, experience, intensity, rest, length, goals } = req.body; // Destructure the request body to get the values of age, experience, intensity, rest, length and goals/ req.body is the request body sent by the client

  const initialMessage = `Create a workout plan for a ${age}-year-old with ${experience}-level experience focusing on ${goals} with ${intensity} intensity for ${rest} days a week, lasting ${length} minutes each session.`;

  const chatCompletion = await openai.chat.completions.create({
    model: "gpt-3.5-turbo",
    messages: [{ role: "user", content: initialMessage }], // The initial message is the initial message which will be sent to the GPT-3 model
  });

  res.json({ chatCompletion: chatCompletion.choices[0].message });
});

//console.log(chatCompletion.choices[0].message);
app.listen(port, () =>
  console.log(`Example app listening at http://localhost:${port}`)
);
