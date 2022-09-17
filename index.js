const express = require("express");
const app = express();
const PORT = 8080;

const cors = require("cors");
app.use(cors());

app.use(express.json());

const morgan = require("morgan");
app.use(morgan('dev'));

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

app.get('*', (req, res) => {
  res.status(404).send({error: `404 - Not Found`, message: 'No route found for the requested URL'});
})

app.listen(
  PORT,
  () => {
    console.log(`Server is listening on PORT ${PORT}`);
  }
);
