import "dotenv/config";
import { port } from "./config/config.js";
import { app } from "./src/app.js";

// config
app.set("port", port);

// run server
app.listen(app.get("port"), () => {
  console.log(`server running in ${app.get("port")}`);
});
