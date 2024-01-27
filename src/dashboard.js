import React from "react";
import { ReactDOM } from "react-dom/client";
import { Link } from "react-router-dom";
import Nav from './nav';


export default function Dashboard() {
    return (
        <div className="container" class="bg-gray-100 h-[100vh] flex">
            {/* side navigation bar*/}
            <div className="" class="w-40 h-[100vh] bg-white shadow-md p-4">
                <Nav />
            </div>
            {/* page content */}
            <div class=" p-4">
                {/* topnav*/}
                <div class=" grid grid-cols-2 w-[80vw] h-12 rounded bg-white shadow-md p-2">
                    <div class="l">
                        <p class="text-gray-500">Pages/Dashboard</p>
                    </div>
                    <div class=" ">
                        <p class="text-right text-gray-500">Admin</p>
                    </div>
                </div>
                <div class="w-[80vw] h-[85vh] mt-4 rounded bg-white shadow-md"></div>
            </div>
        </div>
    )
}