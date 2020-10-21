const express = require('express')
const auth = require("./controllers/auth.js")
const app = express();
const port = 8000;
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.post("/auth", (req, res) => auth.logIn(req, res))
app.get('/', (req, res) => {
  res.send('pong')
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`)
});