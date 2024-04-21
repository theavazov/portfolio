const express = require("express");
const { config } = require("dotenv");

config();

const app = express();
const port = process.env.PORT || 8080;

app.use(express.static(__dirname + "/public"));
app.set("views", __dirname + "/src/views");
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("index", {
    title: "Theavazov - Live, work on free times!",
    description: "Theavazov's portfolio",
    url: process.env.URL,
    gtag: process.env.GTAG,
  });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

module.exports = app;
