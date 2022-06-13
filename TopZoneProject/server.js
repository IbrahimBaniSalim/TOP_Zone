const express = require("express");
const cors = require("cors");
require("dotenv").config();
const db = require("./db/db");
const app = express();
const User = require("./db/models/user");
const path = require("path");
//routers

const registerRouter = require("./routers/routes/auth/signUp");
const loginRouter = require("./routers/routes/auth/login");


//built-in middlewares
app.use(express.json());
//

//third-party middleware
app.use(cors());
app.use(express.static(path.resolve(__dirname, "./client/build")));

//app routers
app.use(registerRouter);
app.use(loginRouter);

///////////////////////////////////////////////////////////////////////////////////////


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server On ${PORT}`);
});

module.exports = app;
