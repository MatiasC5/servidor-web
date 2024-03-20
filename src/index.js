const { createServer } = require("./server/server");
const { envs } = require("./config/env");

const main = () => {
  createServer({
    PORT: envs.PORT,
    PUBLIC_PATH: envs.PUBLIC_PATH,
  });
};

(async () => {
  main();
})();
