const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.status(200).json({ msg: "Welcome to djametcoder" });
});

const startServer = async () => {
  try {
    app.listen(3000, () => console.log("server running ..."));
  } catch (error) {
    console.log(error);
  }
};
