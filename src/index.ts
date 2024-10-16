import express, { Express, Request, Response, NextFunction } from "express";
const app: Express = express();
const port = process.env.PORT || 3000;

// const routes = require("./routes/index");
const bodyParser = require("body-parser");
const cors = require("cors");

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World');  
});

app.use((req: Request, res: Response, next: NextFunction) => {
  console.log(`${req.method} request for ${req.url}`);
  next();
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);  
});

app.use(cors());
// app.options("*", cors()); // add this before your routes
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// app.use(routes);

app.use(function (err: any, req: Request, res: Response, next: NextFunction) {
  console.error(err.stack)
  res.status(500).send('Something broke!')
});