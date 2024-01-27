import React from "react";
import ReactDOM from "react-dom/client";
import { Link } from "react-router-dom";
import Nav from "./nav";

export default function Voters() {
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
                        <p class="text-gray-500">Pages/Voters</p>
                    </div>
                    <div class="text-right">
                        <Link to="/VotersDetails">
                            <button class=" text-white rounded border border-2 border-blue-200 bg-blue-400 w-10 text-sm mr-auto">Back</button>
                        </Link>
                    </div>
                </div>
                <div class="flex justify-center items-center h-[80vh]">
                    <div class=" mt-4 rounded bg-white shadow-md p-6">
                        <div class="flex items-center justify-center">
                            <p class="text-xl text-gray-600">Register Voter Here</p>
                        </div>
                        {/* Voters name*/}
                        <div class="mt-6">
                            <label htmlFor="Name" class="text-sm text-gray-500">Name</label><br></br>
                            <input class="rounded outline-none pl-2 border border-gray-300 h-8 w-[400px] shadow-sm hover:bg-blue-50" type="text" />
                        </div>

                        {/* Voters name*/}
                        <div class="flex gap-4 mt-4">
                            <div>
                                <label htmlFor="Name" class="text-sm text-gray-500">Election ID</label><br></br>
                                <input class="rounded outline-none pl-2 border border-gray-300 h-8 w-[190px] shadow-sm hover:bg-blue-50" type="text" />
                            </div>
                            <div class="ml-[2px]">
                                <label htmlFor="Name" class="text-sm text-gray-500">Voter Key</label><br></br>
                                <input class="rounded outline-none pl-2 border border-gray-300 h-8 w-[190px] shadow-sm hover:bg-blue-50" type="text" />
                            </div>
                        </div>

                        {/* Voters email*/}
                        <div class="mt-4">
                            <label htmlFor="Name" class="text-sm text-gray-500">Email</label><br></br>
                            <input class="rounded outline-none pl-2 border border-gray-300 h-8 w-[400px] shadow-sm hover:bg-blue-50" type="text" />
                        </div>

                        {/* Vote weight*/}
                        <div class="mt-4">
                            <label htmlFor="Name" class="text-sm text-gray-500">Vote Weight</label><br></br>
                            <input class="rounded outline-none pl-2 border border-gray-300 h-8 w-[400px] shadow-sm hover:bg-blue-50" type="text" />
                        </div>

                        {/* Vote weight*/}
                        <div class="mt-8 flex items-center justify-center">
                            <button class="h-10 w-40 bg-blue-400 border border-4 border-blue-200 rounded text-white">Register</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}