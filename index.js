const express = require("express");

const app = express();

app.get("/", (_req, res) => {
  console.log("requesting index page...");

  res.send("Index Page");
});

app.listen(3000, () => {
  console.log("listen to 3000");
});
