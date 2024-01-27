import React from "react";
import ReactDOM from "react-dom/client";
import { Link } from "react-router-dom";
import Nav from "./nav";

export default function CandidatesDetails() {
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
                        <p class="text-gray-500">Pages/Candidates</p>
                    </div>
                    <div class="text-right">
                        <Link to="/candidate"> <button class=" text-white rounded border border-2 border-blue-200 bg-blue-400 w-10 text-sm mr-auto">Add </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}