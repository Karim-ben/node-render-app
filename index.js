require("dotenv").config();
const express = require("express");
const expressLayouts = require("express-ejs-layouts");
const ejs = require("ejs");

const app = express();
app.use(express.static("public"));
app.use(expressLayouts);

app.set("view engine", "ejs");
app.set("layout", "./layouts/main");

app.get("/about", (req, res) => {
  const data = [
    {
      id: 1,
      title: "apple",
      description: "hi im apple",
    },
    {
      id: 2,
      title: "lemon",
      description: "hi im lemon",
    },
    {
      id: 3,
      title: "banana",
      description: "hi im banana",
    },
  ];
  res.render("home", { fruits: data });
});


const port=process.env.PORT
app.listen(port, () => {
  console.log(`server running at http://localhost:${port}`);
});
