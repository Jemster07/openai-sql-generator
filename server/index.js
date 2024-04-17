import express from "express";
import cors from "cors";
import generate from "./generate.js";

const app = express();

app.use(express.json());
app.use(cors());

const port = process.env.PORT || 3002;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.post("/generate", async (req, res) => {
  const userPrompt = req.body.userPrompt;
  try {
    const sqlQuery = await generate(userPrompt);
    res.json({ response: sqlQuery });
  } catch (error) {
    console.error(error)
    res.status(500).send("Internal Server Error");
  }
});

app.listen(port, () => {
  console.log(`Listening on port ${port}...`);
});