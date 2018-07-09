const express = require('express');
const app = express();
const path = require("path");
const args = process.argv;

app.use(express.static(path.join(__dirname, 'build')));

app.get('*', (req, res) => {
  console.log(req.method, req.path, req.headers['user-agent']);
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

const port = args[2] || '3000';
const host = args[3] || '0.0.0.0';
app.listen(port, host, () => {
  console.log(`Starting up http-server, serving ${host}:${port}`);
});