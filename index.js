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

app.get("/stock", (req, res) => {
  res.json(data);
});

io.on("connection", (socket) => {
  
    const sendData = () => {
      const currIndx = cnt % 25;
      const data = [
        topGainerArray[currIndx],
        topLoserArray[currIndx],
        weekHighArray[currIndx],
        topValueArray[currIndx],
      ];
      socket.emit("message", data);
    };
  
    sendData();
  
    const interval = setInterval(() => {
      cnt++;
      sendData();
    }, 5000);
  
    socket.on("disconnect", () => {
      clearInterval(interval);
    });
  });
  

server.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});
