const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");

const corsOptions = require("./config/corsOptions");
const credentials = require("./middlewares/credentials");
const routes = require("./router/routes");
const { showWelcome, showNotFound } = require("./handlers/views");

const app = express();
const PORT = 3000;

app.use(credentials);
app.use(cors(corsOptions));
app.use(express.json());
app.use(cookieParser());

app.get("/", showWelcome);
app.use(routes);
app.use(showNotFound)

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));