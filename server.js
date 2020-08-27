const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const apiBooks = require("./routes/books");
const { adminPanelRouter, adminBro } = require("./routes/admin");

const app = express();

const corsOptions = {
  origin: "http://localhost:4001",
};
app.use(cors(corsOptions));

app.use(adminBro.options.rootPath, adminPanelRouter);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/books", apiBooks);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
