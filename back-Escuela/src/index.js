const express = require("express");
const app = express();
const routes = require('./Api/endPoints')
const cors = require('cors');

app.use(express.json());

// app.use(cors({
//     origin: ["http://localhost:5173"],
//     methods: ["GET", "POST"]
// }));

app.use('/', routes);

const port = 3000;

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
