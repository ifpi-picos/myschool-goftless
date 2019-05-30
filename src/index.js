import express from "express";
import bodyParser from "body-parser";
import routes from "./routes";
import Config from "./config/config";

const app = express();
app.use(bodyParser.json());
app.use("/", routes);

app.listen(Config.PORT, () =>
  console.log(`Server online in port ${Config.PORT}...`)
);

export default app;
