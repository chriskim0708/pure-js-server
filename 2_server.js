const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("<h1>Welcome to the homepage!</h1>");
});

app.get("/post", (req, res) => {
  res.send("<h1>Welcome to the post page!</h1>");
});

app.get("/user", (req, res) => {
  res.send("<h1>Welcome to the user page!</h1>");
});

app.use((req, res) => {
  res.status(404).send("<h1>404 Page not found!</h1>");
});

app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
