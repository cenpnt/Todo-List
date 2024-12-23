"use client";

import { Calendar } from "@nextui-org/react";
import { parseDate } from "@internationalized/date";
import { FaBell, FaUserCircle } from "react-icons/fa";

export default function Home() {
  return (
    <div>
      <div className="flex justify-between items-center p-4">
       <h1 className="text-3xl font-bold text-black">Dashboard</h1>
       <div className="flex space-x-4 items-center">
          <FaBell size={30} className="text-black" />
          <FaUserCircle size={60} className="text-black" />
        </div>
      </div>
      <div className="flex py-3 space-x-6">
        <div className="w-2/3 p-4 bg-white rounded-lg shadow-md">
          <h2 className="text-xl font-bold mb-4 text-black">Recent Tasks</h2>
          <ul className="space-y-3 text-black">
            <li className="p-3 bg-white rounded-md shadow-md">Task 1: Complete documentation</li>
            <li className="p-3 bg-white rounded-md shadow-md">Task 2: Team meeting</li>
            <li className="p-3 bg-white rounded-md shadow-md">Task 3: Study calculus</li>
            <li className="p-3 bg-white rounded-md shadow-md">Task 4: Team meeting</li>
            <li className="p-3 bg-white rounded-md shadow-md">Task 5: Study calculus</li>
          </ul>
        </div>
        <div className="w-1/3 p-4 bg-white rounded-lg shadow-md">
          <h2 className="text-xl font-bold mb-4 text-black">Calendar</h2>
          <div>
            {/* <Calendar aria-label="Date (Uncontrolled)" defaultValue={parseDate("2020-02-03")} /> */}
          </div>
        </div>
      </div>
    </div>
  );
}
