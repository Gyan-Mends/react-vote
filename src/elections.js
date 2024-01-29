import React from "react";
import { useState } from "react";
import ReactDOM from "react-dom/client";
import { Link, useNavigate, useNavigation } from "react-router-dom";
import Nav from "./nav";
import axios from "axios";

export default function Election() {
    //acceping user input
    const navigate = useNavigate;
    const [tittle, setTittle] = useState("");
    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");
    const [electionId, setElectionId] = useState("");

    //handling tittle input
    const handleTittleChange = event => {
        setTittle(event.target.value);
    }

    //handling startDate input
    const handleStartDateChange = event => {
        setStartDate(event.target.value);
    }

    //handling endDate input
    const handleEndDateChange = event => {
        setEndDate(event.target.value);
    }

    //handling tittle input
    const handleIdChange = event => {
        setElectionId(event.target.value);
    }

    //handling submit input
    const handleSubmit = event => {
        //preventing the default behaviou of the form
        event.preventDefault()

        //database request
        axios.post("http://localhost/my-portfolio/src/backend/electionAdd.php", {
            tittle : tittle,
            startDate : startDate,
            endDate : endDate,
            electionId : electionId
        },  {
            headers: {
                "Content-Type": "application/json"
            }
        }).then(response =>{
            try {
                if(response.data === "electionIdAlreadyExist"){
                    alert("Election Id already exist")
                }else if(response.data === "success"){
                    alert("New elaction created successfully")
                    navigate("./electionDetails")
                }else{
                    alert("Unable to create election")
                }
            } catch (error) {
                console.error("error message", error)
            }
        });
    }

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
                        <p class="text-gray-500">Pages/Elections</p>
                    </div>
                    <div class="text-right">
                        <Link to="/electionDetails"> <button class=" text-white rounded border border-2 border-blue-200 bg-blue-400 w-10 text-sm mr-auto">Back </button>
                        </Link>
                    </div>
                </div>

                <div class="flex justify-center items-center h-[80vh]">
                    <div class=" mt-4 rounded bg-white shadow-md p-6">
                        <div class="flex items-center justify-center">
                            <p class="text-xl text-gray-600">Register Election Here</p>
                        </div>
                        {/* Voters name*/}
                        <form onSubmit={handleSubmit}>
                            <div class="mt-6">
                                <label htmlFor="Name" class="text-sm text-gray-500">Tittle</label><br></br>
                                <input value={tittle} onChange={handleTittleChange} class="rounded outline-none pl-2 border border-gray-300 h-8 w-[400px] shadow-sm hover:bg-blue-50" required type="text" />
                            </div>

                            {/* Voters name*/}
                            <div class="flex gap-4 mt-4">
                                <div>
                                    <label htmlFor="Name" class="text-sm text-gray-500">Start Date</label><br></br>
                                    <input value={startDate} onChange={handleStartDateChange} required class="rounded outline-none pl-2 border border-gray-300 h-8 w-[190px] shadow-sm hover:bg-blue-50" type="date" />
                                </div>
                                <div class="ml-[2px]">
                                    <label htmlFor="Name" class="text-sm text-gray-500">End Date</label><br></br>
                                    <input value={endDate} onChange={handleEndDateChange} required class="rounded outline-none pl-2 border border-gray-300 h-8 w-[190px] shadow-sm hover:bg-blue-50" type="date" />
                                </div>
                            </div>

                            {/* Voters email*/}
                            <div class="mt-4">
                                <label htmlFor="Name" class="text-sm text-gray-500">Election ID</label><br></br>
                                <input value={electionId} onChange={handleIdChange} required class="rounded outline-none pl-2 border border-gray-300 h-8 w-[400px] shadow-sm hover:bg-blue-50" type="text" />
                            </div>

                            {/* Vote weight*/}
                            <div class="mt-8 flex items-center justify-center">
                                <button class="h-10 w-40 bg-blue-400 border border-4 border-blue-200 rounded text-white">Register</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}