const express = require("express");
const { createServer } = require("node:http");
const { Server } = require("socket.io");
const cors = require("cors");
const {
  topGainerArray,
  topLoserArray,
  weekHighArray,
  topValueArray,
} = require("./dummyData");

const app = express();
app.use(cors());
app.use(express.json());

const server = createServer(app);
const io = new Server(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
  },
});

const PORT = process.env.PORT || 8080;
let cnt = 0;
const clients = new Set();

const getData = () => {
  const currIndx = cnt % 25;
  return [
    topGainerArray[currIndx],
    topLoserArray[currIndx],
    weekHighArray[currIndx],
    topValueArray[currIndx],
  ];
};

app.get("/stock", (req, res) => {
  res.json(getData());
});

io.on("connection", (socket) => {
  clients.add(socket);

  socket.emit("message", getData());

  if (!io.intervalId) {
    io.intervalId = setInterval(() => {
      cnt++;
      const data = getData();
      clients.forEach(client => {
        if (client.connected) {
          client.emit("message", data);
        } else {
          clients.delete(client);
        }
      });
    }, 5000);
  }

  socket.on("disconnect", () => {
    clients.delete(socket);
    if (clients.size === 0 && io.intervalId) {
      clearInterval(io.intervalId);
      io.intervalId = null;
    }
  });
});

server.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});
