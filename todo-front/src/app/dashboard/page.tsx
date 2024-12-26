"use client";

import { Calendar } from "@nextui-org/react";
import { parseDate } from "@internationalized/date";
import { FaBell, FaUserCircle } from "react-icons/fa";
import { CircularProgressbar } from 'react-circular-progressbar'; 
import 'react-circular-progressbar/dist/styles.css'; 

export default function Home() {
  const percentage: number = 80;

  return (
    <div>
      <div className="flex justify-between items-center p-1">
        <h1 className="text-3xl font-bold text-black">Dashboard</h1>
        <div className="flex space-x-4 items-center">
          <FaBell size={30} className="text-black" />
          <FaUserCircle size={60} className="text-black" />
        </div>
      </div>
      <div className="flex py-3 space-x-6">
        <div className="w-2/3 p-4 bg-white rounded-lg shadow-md transition ease-in-out delay-150 hover:scale-105">
          <h2 className="text-xl font-bold mb-4 text-black">Recent Tasks</h2>
          <ul className="space-y-3 text-black">
            <li className="p-3 bg-white rounded-md shadow-md transition ease-in-out  hover:scale-105">Task 1: Complete documentation</li>
            <li className="p-3 bg-white rounded-md shadow-md transition ease-in-out  hover:scale-105">Task 2: Team meeting</li>
            <li className="p-3 bg-white rounded-md shadow-md transition ease-in-out  hover:scale-105">Task 3: Study calculus</li>
            <li className="p-3 bg-white rounded-md shadow-md transition ease-in-out  hover:scale-105">Task 4: Team meeting</li>
            <li className="p-3 bg-white rounded-md shadow-md transition ease-in-out  hover:scale-105">Task 5: Study calculus</li>
          </ul>
        </div>
        <div className="w-1/3 p-4 bg-white rounded-lg shadow-md transition ease-in-out hover:scale-105">
          <h2 className="text-xl font-bold mb-4 text-black">Calendar</h2>
          <div>
            {/* <Calendar aria-label="Date (Uncontrolled)" defaultValue={parseDate("2020-02-03")} /> */}
          </div>
        </div>
      </div>

      <div className="flex gap-6 mt-6">
        <div className=" w-1/4 p-4 bg-white rounded-lg shadow-md transition ease-in-out hover:scale-105">
          <h3 className="text-lg font-bold mb-2 text-black">Overall Progress</h3>
          <div className="w-24 h-24 mx-auto">
            {/* <CircularProgressbar/> */}
          </div>
          <div className="flex flex-col text-sm text-black">
            <span>Task count: 15</span>
            <span>Progress: 80%</span>
          </div>
        </div>
        <div className="w-1/4 p-4 bg-white rounded-lg shadow-md transition ease-in-out hover:scale-105">
          <h3 className="text-lg font-bold mb-2 text-black">Routine</h3>
          <div className="w-full bg-gray-300 rounded-full h-2 mb-2">
            <div className="bg-green-500 h-2 rounded-full" style={{ width: "100%" }}></div>
          </div>
          <div className="flex flex-col text-sm text-black">
            <span>Task count: 5</span>
            <span>Progress: 100%</span>
          </div>
        </div>
        <div className="w-1/4 p-4 bg-white rounded-lg shadow-md transition ease-in-out hover:scale-105">
          <h3 className="text-lg font-bold mb-2 text-black">Study</h3>
          <div className="w-full bg-gray-300 rounded-full h-2 mb-2">
            <div className="bg-orange-500 h-2 rounded-full" style={{ width: "75%" }}></div>
          </div>
          <div className="flex flex-col text-sm text-black">
            <span>Task count: 8</span>
            <span>Progress: 75%</span>
          </div>
        </div>
        <div className="w-1/4 p-4 bg-white rounded-lg shadow-md transition ease-in-out hover:scale-105">
          <h3 className="text-lg font-bold mb-2 text-black">Project Manager</h3>
          <div className="w-full bg-gray-300 rounded-full h-2 mb-2">
            <div className="bg-red-500 h-2 rounded-full" style={{ width: "50%" }}></div>
          </div>
          <div className="flex flex-col text-sm text-black">
            <span>Task count: 2</span>
            <span>Progress: 50%</span>
          </div>
        </div>
      </div>
    </div>
  );
}
