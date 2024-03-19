//  
const express = require("express");
const app = express();
const PORT = 4000;

const http = require("http").Server(app);
const cors = require("cors");

app.use(cors());

const socketIO = require("socket.io")(http, {
    cors: {
        origin: "http://localhost:5173",
    },
});

socketIO.on("connection", (socket) => {
    console.log(`⚡: ${socket.id} user just connected!`);
    socket.on("disconnect", () => {
        console.log("🔥: A user disconnected");
    });
});

app.get("/api", (req, res) => {
    socketIO.timeout(5000).emit("hello", "world", (err, responses) => {
        if (err) {
            // some clients did not acknowledge the event in the given delay
        } else {
            console.log(responses); // one response per client
        }
    });
    res.json({
        message: "Hello world",
    });
});

http.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});

