import { createServer } from "./server/server.js";
import { envs } from "./config/env.js";

const main = () => {
  createServer({
    PORT: envs.PORT,
    PUBLIC_PATH: envs.PUBLIC_PATH,
  });
};

(async () => {
  main();
})();
