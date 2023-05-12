


app.use(express.static(DIST_DIR));
app.use(express.static("public"));

app.get("/creategame", (req, res) => {
  const { date } = req.query;
  console.log("index.js /creategame endpoint");
  if (date !== undefined) {
    res.json({ data: getCrosswordData(date) }); // check this out
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
