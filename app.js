const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({
  extend: true
}));

let items = [];

app.get("/", function(req, res) {
  res.render("index.ejs", {
    items: items
  });
});

app.post("/", function(req, res) {
  const item = req.body.item;
  items.push(item);
  res.redirect("/");
});

app.listen("3000", function() {
  console.log("Listening on Port 3000");
});
