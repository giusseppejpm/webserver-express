const port = process.env.PORT || 3000;
const express = require("express");
const hbs = require("hbs");
require("./hbs/helpers");
const app = express();
app.use(express.static(__dirname + "/public"));
/**Express HBS engine */
hbs.registerPartials(__dirname + "/views/partials");
app.set("view engine", "hbs");
app.get("/", (req, res) => {
  let salida = {
    nombre: "Pepe",
    edad: 29,
    url: req.url,
  };
  res.render("home.hbs", {
    nombre: "Pepe",
  });
});
app.get("/about", (req, res) => {
  res.render("about.hbs");
});
app.listen(port, () => {
  console.log(`Escuchando puerto ${port}`);
});