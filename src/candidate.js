import React, { useState } from "react";
import axios from "axios";
import ReactDOM from "react-dom/client";
import { Link } from "react-router-dom";
import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';
import Nav from "./nav";

export default function Candidates() {
    //accepting inputs
    const [candidateName, setCandidateName] = useState(null);
    const [electionId, setElectionId] = useState(null);
    const [candidateKey, setCandidateKey] = useState(null)
    const [email, setEmail] = useState(null)
    const [position, setPosition] = useState(null)
    const [image, setImage] = useState(null)

    //handling candidate name input
    const handleCandidateNameChange = event => {
        setCandidateName(event.target.value)
    }

    //handling election id input
    const handleElectionIdChange = event => {
        setElectionId(event.target.value)
    }

    //handling candidate key input
    const handleCandidateKeyChange = event => {
        setCandidateKey(event.target.value)
    }

    //handling candidate email input
    const handleEmailChange = event => {
        setEmail(event.target.value)
    }

    //handling candidate position input
    const handlePositionChange = event => {
        setPosition(event.target.value)
    }

    //handling candidate image input
    const handleImageChange = event => {
        setImage(event.target.value)
    }

    //handling candidate name input
    const handleSubmit = event => {
        //preventing the default behaviour of the form
        event.preventDefault();

        //making post request
        axios.post("http://localhost/my-portfolio/src/backend/candidateReg.php", {
            candidateName: candidateName,
            electionId:electionId,
            candidateKey:candidateKey,
            email:email,
            position:position,
            image:image,
        }, {
            //setting the content type to json
            headers:{
                "Content-Type":"application/json"
            }
        }).then(response =>{
            //checking if candidate already exist
            if(response.data === "checkCandidateAlreadyExist"){
                Swal.fire({
                    icon : "error",
                    title : "Candidate already exist",
                    customClass: {
                        title: 'text-2xl font-bold mb-4',
                        confirmButton: 'bg-blue-500 text-white px-4 py-2 rounded',
                      },
                })
            }else if(response.data === "electionIdNotExist"){
                Swal.fire({
                    icon : "error",
                    title : "Election Id not found",
                    customClass: {
                        title: 'text-2xl font-bold mb-4',
                        confirmButton: 'bg-blue-500 text-white px-4 py-2 rounded',
                      },
                })
            }else{
                Swal.fire({
                    icon : "success",
                    title : "Registeration successful",
                    customClass: {
                        title: 'text-2xl font-bold mb-4',
                        confirmButton: 'bg-blue-500 text-white px-4 py-2 rounded',
                      },
                })
            }
        })
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
                        <p class="text-gray-500">Pages/Candidates</p>
                    </div>
                    <div class="text-right">
                        <Link to="/electionEach"> <button class=" text-white rounded border border-2 border-blue-200 bg-blue-400 w-10 text-sm mr-auto">Back </button>
                        </Link>
                    </div>
                </div>

                <div class="flex justify-center items-center h-[80vh]">
                    <div class=" mt-4 rounded bg-white shadow-md p-6">
                        <div class="flex items-center justify-center">
                            <p class="text-xl text-gray-600">Register Candidates Here</p>
                        </div>
                        <form onSubmit={handleSubmit}>
                            {/* Candidate name*/}
                            <div class="mt-6">
                                <label htmlFor="Name" class="text-sm text-gray-500">Candidate Name</label><br></br>
                                <input required value={candidateName} onChange={handleCandidateNameChange} class="rounded outline-none pl-2 border border-gray-300 h-8 w-[400px] shadow-sm hover:bg-blue-50" type="text" />
                            </div>

                            {/* Election id*/}
                            <div class="flex gap-4 mt-4">
                                <div>
                                    <label htmlFor="Name" class="text-sm text-gray-500">Election ID</label><br></br>
                                    <input required value={electionId} onChange={handleElectionIdChange} class="rounded outline-none pl-2 border border-gray-300 h-8 w-[190px] shadow-sm hover:bg-blue-50" type="text" />
                                </div>
                                {/*Candidate key*/}
                                <div class="ml-[2px]">
                                    <label htmlFor="Name" class="text-sm text-gray-500">Candidate Key</label><br></br>
                                    <input required value={candidateKey} onChange={handleCandidateKeyChange} class="rounded outline-none pl-2 border border-gray-300 h-8 w-[190px] shadow-sm hover:bg-blue-50" type="password" />
                                </div>
                            </div>

                            {/* Candidate email*/}
                            <div class="mt-4">
                                <label htmlFor="Name" class="text-sm text-gray-500">Email</label><br></br>
                                <input required value={email} onChange={handleEmailChange} class="rounded outline-none pl-2 border border-gray-300 h-8 w-[400px] shadow-sm hover:bg-blue-50" type="email" />
                            </div>

                            {/* candidate position*/}
                            <div class="mt-4">
                                <label htmlFor="Name" class="text-sm text-gray-500">Position</label><br></br>
                                <input required value={position} onChange={handlePositionChange} class="rounded outline-none pl-2 border border-gray-300 h-8 w-[400px] shadow-sm hover:bg-blue-50" type="text" />
                            </div>

                            {/* Candidate image*/}
                            <div class="mt-4">
                                <label htmlFor="Name" class="text-sm text-gray-500">Image</label><br></br>
                                <input required value={image} onChange={handleImageChange} class="rounded outline-none pl-2 border border-gray-300 h-8 w-[400px] shadow-sm hover:bg-blue-50" type="file" />
                            </div>

                            {/* Submit button*/}
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