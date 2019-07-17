const express = require("express");
const redis = require("redis");

const app = express();

const client = redis.createClient();

app.get("/", (req, res) => {
  res.send("Hi there! ok");
});

app.listen(8080, () => {
  console.log("Listening on port 4000!")
});