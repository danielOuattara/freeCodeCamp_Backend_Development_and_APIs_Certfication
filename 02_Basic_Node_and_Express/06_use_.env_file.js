const mySecret = process.env['MESSAGE_STYLE'];
const express = require('express');
const app = express();

console.log("Hello World");

app.use("/public", express.static(__dirname + "/public")); 

app.get("/", (req, res)=>{
  res.sendFile(__dirname + '/views/index.html')
});

app.get("/json", (req, res)=>{
  if(process.env.MESSAGE_STYLE === "uppercase") {
    res.json({"message": "HELLO JSON"})
  } else {
  res.json({"message": "Hello json"})
  }
});

 module.exports = app;
