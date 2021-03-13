import http from "http";
import WebSocket from "ws";
import express from "express";

const app = express();

const server = http.createServer(app);

const wss = new WebSocket.Server({ server });

wss.on("connection", (ws) => {
  ws.on("message", (data) => {
    ws.send(`Hello it is me and my data is ${data}`);
  });
  ws.send("Hello EveryOne");
});

const PORT = 3000;

server.listen(PORT, () => {
  console.log(`The server has started on port ${PORT}`);
});
