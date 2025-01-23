const express = require("express");
const bodyParser = require("body-parser");
const { connectToDatabase } = require("./config/config");
const authRoutes = require("./routes/auth.routes");
const jobRoutes = require("./routes/jobs.routes");
const applicationRoutes = require("./routes/applicatiion.routes");


connectToDatabase();

const app = express();

// WebSocket
const WebSocket = require("ws");
const wss = new WebSocket.Server({ noServer: true });

// Middleware
app.use(bodyParser.json());

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/jobs/", jobRoutes);
app.use("/api/applications/", applicationRoutes);

// Start server
const server = app.listen(process.env.PORT, () => {
  console.log(`Server running on http://localhost:${process.env.PORT}`);
});

server.on("upgrade", (request, socket, head) => {
  wss.handleUpgrade(request, socket, head, (ws) => {
    wss.emit("connection", ws, request);
  });
});
