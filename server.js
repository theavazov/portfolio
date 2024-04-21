const express = require("express");
const { config } = require("dotenv");

config();

const app = express();
const port = process.env.PORT || 8080;

app.use((req, res, next) => {
  const analyticsScript = `<script src="https://vizard.vercel-analytics.com/wizard.js"></script><script>window.vercelId="${process.env.PROJECT_ID}";</script>`;
  res.locals.analyticsScript = analyticsScript;
  next();
});

app.use(express.static(__dirname + "/public"));
app.set("views", __dirname + "/src/views");
app.set("view engine", "ejs");

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
