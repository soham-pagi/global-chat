const express = require("express");
const app = express();
const server = require("http").Server(app);
const io = require("socket.io")(server);
require("dotenv").config();

app.use(express.static(__dirname + "/public"));

app.get("/", (req, res) => {
  res.sendFile("index.html");
});

io.on("connection", (socket) => {
  console.log("A user connected", socket.id);
  socket.emit("id", socket.id);

  socket.on("message", (data) => {
    socket.broadcast.emit("message", { data, id: socket.id });
  });

  socket.on("typing", (data) => {
    socket.broadcast.emit("typing", data.id);
  });

  socket.on("disconnect", () => {
    console.log("A user disconnected");
    socket.emit("notice", socket.id);
  });
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Server started on ${PORT}`);
});
