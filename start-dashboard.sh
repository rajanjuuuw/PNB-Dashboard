// server.js
const express = require("express");
const http = require("http");
const WebSocket = require("ws");
const path = require("path");

const app = express();
const server = http.createServer(app);
const wss = new WebSocket.Server({ server });

// Serve file statis
app.use(express.static(path.join(__dirname)));

// Handle koneksi websocket
wss.on("connection", (ws) => {
  console.log("🟢 Client connected");
  
  // kirim update setiap 5 detik
  const interval = setInterval(() => {
    const fakeData = {
      plPerformance: (Math.random() * 20 + 80).toFixed(2),
      operationalScore: (Math.random() * 10 + 90).toFixed(2),
      voyageEfficiency: (Math.random() * 15 + 85).toFixed(2),
    };
    ws.send(JSON.stringify({ type: "realtime", data: fakeData }));
  }, 5000);

  ws.on("close", () => {
    console.log("🔴 Client disconnected");
    clearInterval(interval);
  });
});

server.listen(8080, () => {
  console.log("✅ Server running on http://localhost:8080");
});
