"use client";

import { div } from "framer-motion/client";
import {FaBell, FaUserCircle} from "react-icons/fa";
import CreateTask from "../ui/routine/createtask";

export default function Routine(){
    const today = new Date();
    const formattedDate = today.toLocaleDateString('en-US', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
    return (
        <div>
            <div className="flex justify-between items-center p-1">
                <h1 className="text-3xl font-bold text-black">Routine</h1>
                <div className="flex space-x-4 items-center">
                    <FaBell size={30} className="text-black"/>
                    <FaUserCircle size={60} className="text-black"/>
                </div>
            </div>
            <div className="p-1">
                <p className="text-lg text-black">{formattedDate}</p>
            </div>
            <div>
                <CreateTask/>
            </div>
        </div>

    );
}