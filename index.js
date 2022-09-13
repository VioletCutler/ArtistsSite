const express = require("express");
const app = express();
const PORT = 8080;

const cors = require("cors");
app.use(cors());

const morgan = require("morgan");
app.use(morgan("dev"));

app.use(express.json());

app.use((req, res, next) => {
  console.log(`${req.method}:${req.url}`);
  next();
});

const path = require("path");
app.use(express.static(path.join(__dirname, "build")));

app.use("/", (req, res, next) => {
  console.log('Body Logger Begin-->')
  console.log(req.body)
  console.log('Body Logger End-->')
  next()
});

app.use("/api", require("./api"));

app.use((req, res, next) => {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

app.listen(
  PORT,
  () => {
    console.log(`Is this working Server is listening on PORT ${PORT}`);
  }
);
