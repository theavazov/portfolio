const express = require("express");
const { config } = require("dotenv");
const { inject } = require("@vercel/analytics");

config();
inject();

const app = express();
const port = process.env.PORT || 8080;

app.use(express.static("public"));
app.set("views", __dirname + "/src/views");
app.set("view engine", "ejs");

console.log(__dirname + "/src/views");

app.get("/", (req, res) => {
  res.render("index", {
    title: "Theavazov - Live, work on free times!",
    description: "Theavazov's portfolio",
    url: process.env.URL,
  });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

module.exports = app;