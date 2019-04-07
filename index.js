const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = process.env.PORT || 4000;
const state = require("./state");

app.use(bodyParser.json());

app.post("/users", (req, res) => {
  state.users.push({
    _id: 6,
    name: "David CopperField",
    occupation: "Street Magician",
    avatar: "https://upload.wikimedia.org/wikipedia/en/5/50/Agentdalecooper.jpg"
  });
  res.send(state.users[state.users.length - 1]);
});

app.get("/users", (req, res) => res.send(state.users));

app.get("/users/1", (req, res) => res.send(state.users[0]));

app.put("/users/1", (req, res) => {
  state.users[0]["name"] = "Micheal Jordan";
  res.json(state.users[0]);
});

app.delete("/users/1", (req, res) => {
  state.users.shift();
  res.send("deleted");
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
