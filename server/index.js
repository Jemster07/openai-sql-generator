import express from "express";
import cors from "cors";

const app = express();
app.use(cors());

const port = process.env.PORT || 3002;

app.get("/", (req, res) => {
    res.send("Hello World!");
});

app.listen(port, () => {
    console.log(`Listening on port ${port}...`);
});