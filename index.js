const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const rotasDeUsuario = require("./src/routes/usuarios");
const rotasDePatrocinador = require("./src/routes/patrocinadores");
const rotasDeOng = require("./src/routes/ongs");
const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: false
  })
);

app.use("/usuarios", rotasDeUsuario);
app.use("/patrocinadores", rotasDePatrocinador);
app.use("/ongs", rotasDeOng);

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Express server listening on port %d", port);
});
