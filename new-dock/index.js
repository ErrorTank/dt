const express = require("express");


const app = express();

app.get("/", (req, res) => {
  res.send("Hi there! ok");
});

app.listen(8080, () => {
  console.log("Listening on port 4000!")
});