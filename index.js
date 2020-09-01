const express = require("express");
const ejs = require("ejs");
const bodyparser = require("body-parser");

const app = express();

app.use(express.static("public"));
app.use(express.static("Tournament"));
app.use(express.static("Wintercamp"));
app.use(express.static("Summercamp"));
app.use(express.static("map"));
app.use(bodyparser.urlencoded({extended: true}));

app.get("/", function(req, res){
  res.sendFile(__dirname + "/index.html");
});

app.get("/main", function(req, res){
  res.sendFile(__dirname + "/main.html");
});

app.get("/index", function(req, res){
  res.sendFile(__dirname + "/index.html");
});

app.listen(3000, function(){
  console.log("succesfullly started server at port 3000")
})
