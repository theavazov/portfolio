const express = require("express");
const { config } = require("dotenv");
const { inject } = require("@vercel/analytics");

config();

const app = express();
const port = process.env.PORT || 8080;

app.use((req, res, next) => {
  // Modify the response to inject Vercel Analytics script
  res.locals.analyticsScript = inject({
    projectId: process.env.PROJECT_ID,
    page: req.path,
  });
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
