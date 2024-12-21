import React from "react";
import NavLink from "./navlink";
import Link from "next/link";
import "../../globals.css";

export default function Sidebar(){
    return(
        <div className="flex h-full flex-col px-3 py-4 md:px-2 bg-custom-peach min-h-screen">
            <Link
                href="/"
            >
                <div className="w-32 text-white md:w-40">
                Logo
                </div>
            </Link>
            <div >
                <NavLink/>
            </div>
            
        </div>
    );
}