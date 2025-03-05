import React, { useState } from "react";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";

const Dashboard = () => {
    const [code , setCode ] = useState("ADEF21")
    const [hide , setHide] = useState(true);

    

  return (
    <div className="h-screen max-w-2xl font-mono container mx-auto flex items-center justify-center p-2 ">
      <div className="p-5 w-full border border-zinc-800 rounded-2xl gap-3 grid grid-cols-2 ">
        <div className="col-span-2">
          <h1 className="text-2xl md:text-3xl font-semibold flex gap-2 items-center">
            {" "}
            <span className="md:scale-125">
              <svg
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
              </svg>
            </span>
            Real Time Chat
          </h1>
          <p className="text-sm text-zinc-400">
            termporary room that expires after all the users exit
          </p>
        </div>
        <div className="w-full col-span-2">
          <Button className="w-full text-lg py-6 cursor-pointer">
            Create New Room
          </Button>
        </div>
        <div className="col-span-2">
          <div className="">
            <Input type="text" className="py-5" placeholder="Enter yout name" />
          </div>
          <div className="py-5 flex gap-2 items-center ">
            <Input className="py-5" type="text" placeholder="Enter Romm Code" />
            <Button size={"lg"} className="text-black cursor-pointer">
              Join Room
            </Button>
          </div>
        </div>
        <div className={`col-span-2 ${hide == true ? "hidden" : null}`}>
          <div className="w-full bg-zinc-800 h-28 flex flex-col items-center justify-center rounded-md">
             <h1 className="text-zinc-400 text-sm">Share this code with your friend</h1>
             <div className="text-2xl text-zinc-300 font-semibold py-2 flex gap-4 items-center ">{code} 
             <svg className="cursor-pointer"  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-copy"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M7 7m0 2.667a2.667 2.667 0 0 1 2.667 -2.667h8.666a2.667 2.667 0 0 1 2.667 2.667v8.666a2.667 2.667 0 0 1 -2.667 2.667h-8.666a2.667 2.667 0 0 1 -2.667 -2.667z" /><path d="M4.012 16.737a2.005 2.005 0 0 1 -1.012 -1.737v-10c0 -1.1 .9 -2 2 -2h10c.75 0 1.158 .385 1.5 1" /></svg>

             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

//rounded-xl border bg-card text-card-foreground shadow w-full"
export default Dashboard;
