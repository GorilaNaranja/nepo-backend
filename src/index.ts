import express, { Express, Request, Response, NextFunction } from "express";
import bodyParser from "body-parser";
import routes from './routes/index';
import { handleErrors } from "./middleware/handleErrors";

const app: Express = express();
const port = process.env.PORT || 3000;

const cors = require("cors");

app.get("/ping", (req: Request, res: Response) => {
  res.send("Node app running");
});

app.use("/", routes);

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(function (err: any, req: Request, res: Response, next: NextFunction) {
  console.error(err.stack);
  res.status(500).send("Something went wrong!");
});

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  handleErrors(err, req, res, next);
});