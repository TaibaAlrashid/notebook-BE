const express = require("express");
const cors = require("cors");
const noteRoutes = require("./API/book/routes");
const app = express();


// ****************** Middleware ******************
app.use(cors());
app.use(express.json());


// ****************** Routes ******************
app.use("/notes", noteRoutes);

app.listen(8000);