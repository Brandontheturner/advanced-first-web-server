const express = require("express");
//bringing in express
const bodyParser = require("body-parser");
//bringing in body-parser, make sure you npm install
const app = express();
// ^^^ what does this do?

const port = process.env.PORT || 4000;
//telling express to watch port 4000
const state = require("./state");
// setting state to variable and defining path

let lastId = state.users[state.users.length];
//creating a variable with all the users in the array for easier access

app.use(bodyParser.json());
//body parcer turning body into json?? I think?

app.post("/users/", (req, res) => {
  const newUser = req.body;
  //setting body request to variable newUser
  lastId++;
  //iterating through lastId variable by 1 increment
  newUser._id = lastId;
  // setting lastId to newUser._id
  state.users.push(newUser);
  // pushing newUser to users array, i think
  res.json(newUser);
  // pushing newUser into DB and creating additonal id entry
});

app.get("/users/:userId", (req, res) => {
  const newId = state.users.findIndex(user => {
    // creating variable and setting it to user object index location
    return user._id == req.params.userId;
    //checking to make sure returned id matches format requested in the parameter, with params, short for parameter
  });
  res.json(state.users[newId]);
  // sending new user index and id to the db or json object
});

app.put("/users/:userId", (req, res) => {
  const newId = state.users.findIndex(user => {
    return user._id == req.params.userId;
    // creating variable and setting it to user oject index location
  });
  state.users[newId].name = "Repitition helps understanding";
  // put is changing the name of the current name field to the new name written to state.users using the newId and .name method
  res.json(state.users[newId]);
  // name replaced in the id that was referenced
});

app.delete("/users/:userId", (req, res) => {
  const newId = state.users.findIndex(user => {
    // creating a variable and setting it to user index location
    return user._id == req.params.userId;
    // checking to make sure the user id matches the parameter it is asking for if not does not proceed
  });
  state.users[newId].isActive = false;
  //adding a new key and value to the object, with the key isActive and the boolean value false
  res.send("Deleted");
  // sends a deleted string to the db showing the object has been/or will be deleted?
});
