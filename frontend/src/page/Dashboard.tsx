import React, { useEffect, useRef, useState } from "react";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { RoomId } from "../utils/RoomeCode";

const Dashboard = () => {
    const [code , setCode ] = useState("fdas")
    const [hide , setHide] = useState(true);
    const [text , setText] = useState(false)
    const [message , setMessage] = useState(["hi there"])
    const inputRef = useRef(); 
    const roomCodeRef = useRef();
    const wsRef = useRef();


    function generateRoomId(){ 
      setHide(false)
      const roomId = RoomId();
      setCode(roomId)
      console.log(code)
    }
    
    console.log

    useEffect(() => { 
      const ws = new WebSocket("http://localhost:8080"); 
      ws.onmessage = (event) => { 
        setMessage(m =>  [...m , event.data])
      }

      console.log(message)
      wsRef.current = ws

      ws.onopen = () => { 
        ws.send(JSON.stringify({ 
          type:"join", 
          payload:{
            name:"user2",
            roomId:roomCodeRef.current?.value
          }
        }))
      }
    }, [])


  return (
    <div className="h-screen max-w-2xl font-mono container mx-auto flex items-center justify-center p-2 ">
      <div className="p-5 w-full border border-zinc-800 rounded-2xl gap-3 grid grid-cols-2 ">
        <div className="col-span-2">
          <h1 className="text-2xl md:text-2xl font-semibold flex gap-2 items-center py-1">
            {" "}
            <span className="md:scale-125">
              {/* <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="icon icon-tabler icons-tabler-outline icon-tabler-message-circle"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M3 20l1.3 -3.9c-2.324 -3.437 -1.426 -7.872 2.1 -10.374c3.526 -2.501 8.59 -2.296 11.845 .48c3.255 2.777 3.695 7.266 1.029 10.501c-2.666 3.235 -7.615 4.215 -11.574 2.293l-4.7 1" />
              </svg> */}
            </span>
            Real Time Chat
          </h1>
          <p className="text-sm text-zinc-400 py-1">
            termporary room that expires after all the users exit
          </p>
        </div>
        {/* <div className="w-full col-span-2">
          <Button onClick={generateRoomId} className="w-full text-lg py-6 cursor-pointer">
            Create New Room
          </Button>
        </div> */}
        {/* <div className="col-span-2">
          <div className="">
            <Input ref={inputRef} type="text" className="py-5" placeholder="Enter yout name" />
          </div>
          <div className="py-5 flex gap-2 items-center ">
            <Input ref={roomCodeRef} className="py-5" type="text" placeholder="Enter Romm Code" />
            <Button  size={"lg"} className="text-black cursor-pointer">
              Join Room
            </Button>
          </div>
        </div> */}
        {/* <div className={`col-span-2 ${hide == true ? "hidden" : null}`}>
          <div className="w-full bg-zinc-800 h-28 flex flex-col items-center justify-center rounded-md">
             <h1 className="text-zinc-400 text-sm">Share this code with your friend</h1>
             <div className="text-2xl text-zinc-300 font-semibold py-2 flex gap-4 items-center ">{code} 
             </div>
          </div>
        </div> */}
        <div className="col-span-2 flex flex-col gap-5">
          <div className="col-span-2">
          <div className="h-14 text-sm text-zinc-400 bg-zinc-800 flex items-center justify-between p-2 rounded-md ">
            <p>Rome Code:{code}</p>
            <p>User:{""}</p>
          </div>
          </div>
          <div className="min-h-96 border border-zinc-800 flex justify-between rounded-md p-3 overflow-auto z-0 ">
            <div className="text-sm bg-zinc-200 text-zinc-950 h-fit p-2 rounded pl-3">{message}</div>
            <div></div>
          </div>
          <div className="flex items-center gap-3">
              <Input className="py-5" type="text" placeholder="Enter message" />
              <Button className="cursor-pointer" size={"lg"}>Send</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

//rounded-xl border bg-card text-card-foreground shadow w-full"
export default Dashboard;
