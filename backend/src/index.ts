import { WebSocket, WebSocketServer } from "ws";
import { chatId } from "./utils";

const wss = new WebSocketServer({ port:8080});

interface User { 
    socket: WebSocket,
    name:string, 
    room:string, 
    user: number,
}

let userCount: number = 0;

let allSocket: User[] = []; 

wss.on("connection" , (socket) => {
    
    socket.on("message" , function(message){ 
        //@ts-ignore
        const parsedMessage = JSON.parse(message);
        const roomId = chatId()

        if(parsedMessage.type == "join") { 
            userCount += 1;
            console.log(parsedMessage)
            allSocket.push({ 
                socket,
                name:parsedMessage.payload.name, 
                room:parsedMessage.payload.roomId, 
                user:userCount
            })
            console.log(allSocket)
        }

        if(parsedMessage.type == "chat"){ 

            let currentUserRoom = null;

            for(let i = 0; i < allSocket.length; i++){ 
                if(allSocket[i].socket == socket){ 
                    currentUserRoom = allSocket[i].room;
                }   
            }

            for(let i = 0; i<allSocket.length; i++){ 
                if(allSocket[i].room == currentUserRoom){ 
                    allSocket[i].socket.send(parsedMessage.payload.message)
                }
            }
            
        }

    })
})