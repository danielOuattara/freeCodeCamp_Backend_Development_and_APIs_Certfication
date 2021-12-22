const express = require('express');
const app = express();

console.log("Hello World");

app.get("/", (req, res)=>{
  res.sendFile(__dirname + '/views/index.html')
});

app.listen( 3000, () => {
    console.log("Connexion Established")
})
 module.exports = app;
