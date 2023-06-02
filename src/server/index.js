const express = require("express");
const app = express();
const { response } = require("express"); //is this being used?
const path = require("path");
const port = process.env.PORT || 3000;
const DIST_DIR = path.join(__dirname, "..", "../dist");
const HTML_FILE = path.join(DIST_DIR, "index.html");
const { getCrosswordData } = require("./newGameManager");

app.use(express.static(DIST_DIR));
app.use(express.static("public"));

app.get("/creategame", (req, res) => {
  const { date } = req.query;
  console.log("index.js /creategame endpoint");
  if (date !== undefined) {
    res.json({ data: getCrosswordData(date) }); // .json() dictates that the response will be in JSON format
  }
});

app.get("/", (req, res) => {
  res.sendFile(HTML_FILE);
});

app.get("*", (req, res) => {
  res.sendFile(HTML_FILE);
});

app.listen(port, () => {
  console.log(`App listening on port: ${port}`);
});

