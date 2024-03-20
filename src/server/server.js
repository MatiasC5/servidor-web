const express = require("express");
const path = require("path");

const createServer = (options) => {
  const { PORT, PUBLIC_PATH = "public" } = options;
  const app = express();

  //Para poder usar middlewares se usa la palabra use(express)
  app.use(express.static(PUBLIC_PATH)); // contenido estatico que ponemos disponible

  app.get("*", (req, res) => {
    const indexPath = path.join(
      __dirname + `../../../${PUBLIC_PATH}/index.html`
    );
    res.sendFile(indexPath);
  });
  app.listen(PORT, () => {
    console.log(`escuchando en el puerto ${PORT}`);
  });
};

module.exports = {
  createServer,
};
