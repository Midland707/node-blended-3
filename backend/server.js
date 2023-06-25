const express = require("express");
const app = express();
const path = require("path");
const connectDb = require("../config/connectDb");
require("colors");
const errorHandler = require("./midelwares/errorHandler");
const { engine } = require("express-handlebars");
const sendEmail = require("./services/sendEmail");

const configPath = path.join(__dirname, "..", "config", ".env");

const dotenv = require("dotenv");
dotenv.config({ path: configPath });

const { PORT } = process.env;

app.use(express.static("public"));

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// set tamplate engine
app.engine("handlebars", engine());
app.set("view engine", "handlebars");
app.set("views", "backend/views");

app.get("/", (req, res) => {
  res.render("home");
});

app.get("/about", (req, res) => {
  res.render("about");
});

app.get("/contact", (req, res) => {
  res.render("contact");
});

app.post("/send", async (req, res) => {
  try {
    // res.send(req.body);
    res.render("send", {
      msg: "Contact send success",
      name: req.body.userName,
      email: req.body.userEmail,
    });
    await sendEmail(req.body);
  } catch (error) {
    res.status(400).json({ code: 400, message: error.message });
  }
});

app.use("/api/v1", require("./routers/alcoRouts"));
app.use(errorHandler);

connectDb();

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`.blue.bold);
});
