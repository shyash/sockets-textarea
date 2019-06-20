const PORT = process.env.PORT || 8800;
const IP = process.env.IP || '0.0.0.0';
const express = require("express");
const app = express();
app.get("/", function (req,res) {
	res.sendFile('index.html',{root: __dirname + '/views'})
})
app.get("*", function (req, res) {
  res.send("404 URL NOT FOUND");
});
app.listen(PORT, IP, () => {
  console.log('Server started!')
})