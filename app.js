const express = require("express");
const app = express();
const port = 3101;
const errHandler = require("./middleware/generlErrorHandler");
const tRouter = require("./router/testErrRouter");
//Make sure it could handle json format in right way.
app.use(express.json());

app.get("/", (req, res) => {
  res.json({ message: "Hello World!" });
});
app.use("/newTE", tRouter);

//Test error happend
app.get("/testerr", (req, res) => {
  res.status(404);
  throw new Error("this is a test error. Do not be panic.");
});

//Error handler
// app.use(errHandler.simpleErrOutput);
app.use(errHandler.errhandlerGeneral);
//Start server on this port.
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
