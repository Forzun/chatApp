"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ws_1 = require("ws");
const utils_1 = require("./utils");
const wss = new ws_1.WebSocketServer({ port: 8080 });
let userCount = 0;
let allSocket = [];
wss.on("connection", (socket) => {
    console.log("user connect");
    socket.on("message", function (message) {
        console.log('user want to send message ');
        //@ts-ignore
        const parsedMessage = JSON.parse(message);
        const roomId = (0, utils_1.chatId)();
        console.log(parsedMessage);
        if (parsedMessage.type == "join") {
            userCount += 1;
            allSocket.push({
                socket,
                name: parsedMessage.payload.name,
                room: parsedMessage.payload.roomId,
                // user:userCount
            });
            console.log(allSocket);
        }
        if (parsedMessage.type == "chat") {
            let currentUserRoom = null;
            for (let i = 0; i < allSocket.length; i++) {
                if (allSocket[i].socket == socket) {
                    currentUserRoom = allSocket[i].room;
                }
            }
            for (let i = 0; i < allSocket.length; i++) {
                if (allSocket[i].room == currentUserRoom) {
                    allSocket[i].socket.send(parsedMessage.payload.message);
                }
            }
        }
    });
});
