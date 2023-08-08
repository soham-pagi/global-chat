const express = require("express");
const app = express();
const server = require("http").Server(app);
const io = require("socket.io")(server);
require("dotenv").config();

app.get("/", (req, res) => {
  //   res.send(`<h1>Hello World</h1>`);
  res.sendFile(__dirname + "/index.html");
});

io.on("connection", (socket) => {
  console.log("A user connected", socket.id);
  socket.emit("id", socket.id);

  socket.on("message", (data) => {
    io.emit("message", { data, id: socket.id });
  });

  socket.on("typing", (data) => {
    io.emit("typing", data.id);
  });

  socket.on("disconnect", () => {
    console.log("A user disconnected");
    io.emit("notice", socket.id);
  });
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Server started on ${PORT}`);
});
