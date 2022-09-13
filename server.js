const express = require("express");
const app = express();
const PORT = 8080;

app.get('/', (req, res) => {
    res.send('hi')
})

app.listen(3000, () => {
    console.log(`Server is listening on the PORT ${3000}`)
})