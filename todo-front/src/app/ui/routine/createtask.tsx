"use client"

import { div } from "framer-motion/client";
import { useState } from "react";

export default function CreateTask(){
    const [showForm, setShowForm] = useState(false);
    const handleButtonClick = () => {
        setShowForm(!showForm);
    };

    const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const task = (e.target as HTMLFormElement).task.value;
        (e.target as HTMLFormElement).reset();
        setShowForm(false);
    }

    return (
        <div className="p-4">
            <div className="flex justify-between items-center border border-gray-300 p-4 rounded-md transition ease-in-out  hover:scale-105">
                <p className="text-lg text-black">Create a new TASK</p>
                <button onClick={handleButtonClick} className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">Create Task</button>
            </div>
            {showForm && (
                <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center">
                    <div className="bg-white p-6 rounded-md shadow-md w-96 text-black">
                        <h2 className="text-2xl font-bold mb-4">New Task</h2>
                        <form onSubmit={handleFormSubmit}>
                            <div className="mb-4">
                                <label htmlFor="task" className="block text-sm ">Task Name</label>
                                <input type="text" id="task" name="task" required className="mt-1 block border border-gray-300 rounded-md p-1" placeholder="Enter task name" />
                            </div>
                            <div className="flex justify-start space-x-2">
                                <button type="button" onClick={() => setShowForm(false)} className="w-20 bg-red-600 rounded-md p-1 text-white hover:bg-red-700">Cancel</button>
                                <button type="submit" className="w-30 bg-blue-600 rounded-md p-1 text-white hover:bg-blue-700">Save Task</button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
}