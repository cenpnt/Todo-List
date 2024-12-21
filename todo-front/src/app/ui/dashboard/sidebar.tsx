import React from "react";
import NavLink from "./navlink";
import "../../globals.css";

export default function Sidebar(){
    return(
        <div className="bg-custom-peach min-h-screen p-4">
            <nav>
                <ul>
                   <NavLink/>
                </ul>
            </nav>
        </div>
    );
}