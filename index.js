const express = require("express");
const app = express();
const PORT = process.env.PORT || 4000;

const cors = require("cors");
app.use(cors());

const morgan = require("morgan");
app.use(morgan("dev"));

app.use(express.json());

app.use((req, res, next) => {
  console.log(`${req.method}:${req.url}`);
  next();
});

app.get('/', (req, res, next) => {
    console.log('logger')
    next()
})

const path = require("path");
app.use(express.static(path.join(__dirname, "build")));

app.use('/api', require('./api'))

app.use((req, res, next) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'))
})
app.listen(
  (PORT,
  async () => {
    console.log(`Server is listening on PORT ${PORT}`);
  })
);
