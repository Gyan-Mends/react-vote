//importing react components
import axios from "axios";
import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import { Link,useNavigate } from 'react-router-dom';


export default function Signup() {
    //accepting the input field inputs
    const navigate = useNavigate();
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [orgName, setOrgname] = useState("");
    const [number, setNumber] = useState("");
    const [password, setPassword] = useState("");
    const [users, setUsers] = useState("");

    //handling username input 
    const handleNameChange = event => {
        setUsername(event.target.value);
    }

    //handling email  input 
    const handleEmailChange = event => {
        setEmail(event.target.value);
    }

    //handliing orgname inputs
    const handleOrgnameChange = event => {
        setOrgname(event.target.value);
    }

    //handliing number inputs
    const handleNumberChange = event => {
        setNumber(event.target.value);
    }

    //handliing password inputs
    const handlePasswordChange = event => {
        setPassword(event.target.value);
    }

    //handliing orgname inputs
    const handleUsersChange = event => {
        setUsers(event.target.value);
    }

    //handliing submit
    const handleSubmit = event => {
        //preventing the default behaviour of the form
        event.preventDefault();

        //forms request
        axios.post('http://localhost/my-portfolio/src/backend/register.php', {
            username: username,
            email: email,
            orgName: orgName,
            number: number,
            password: password,
            users: users

        }, {
            headers: {
                "Content-Type": "application/json"
            }
        }).then(response => {
            try {
                if (response.data === "exist") {
                    alert("User already exist");
                }else if(response.data === "notexist") {
                    alert("User registeration successful")
                    navigate("/")
                }else{
                    alert("Unable to register user")
                }
            } catch (error) {
                console.error("insertion".error)
            }
        })
    }


    return (
        <div class="flex items-center justify-center h-[100vh] bg-gray-50">
            <div class="">
                <h1 class="text-center text-2xl text-blue-400"> Online Election Runner</h1>
                <div class=" mt-10   border rounded-lg p-4  bg-white border boder-white shadow-md" >
                    <h1 class="text-center text-gray-500 text-lg mb-7"> Sign Up For Free</h1>

                    <form onSubmit={handleSubmit}>
                        <div class="flex items-center justify-flex gap-10">
                            <div>
                                <div>
                                    {/* Name input field*/}
                                    <label htmlFor="username " class="text-sm text-gray-600 ml-2">Name</label><br></br>
                                    <input value={username} onChange={handleNameChange} class="hover:bg-blue-50 h-8 w-60 ml-2 outline-none border border-gray-300 rounded pl-2  shadow-sm" required type="text" id="name" /><br></br>
                                </div>
                                {/* PEmail input field*/}
                                <div class="mt-4">
                                    <label htmlFor="email " class="text-sm text-gray-600 ml-2">Email </label><br></br>
                                    <input value={email} onChange={handleEmailChange} class="hover:bg-blue-50 h-8 w-60 ml-2 outline-none border border-gray-300 rounded pl-2  shadow-sm" required type="email" id="email" /><br></br>
                                </div>
                                {/* org  name input field*/}
                                <div class="mt-4">
                                    <label htmlFor="orgname " class="text-sm text-gray-600 ml-2">Sch/Org name </label><br></br>
                                    <input class="hover:bg-blue-50 h-8 w-60 ml-2 outline-none border border-gray-300 rounded pl-2  shadow-sm" value={orgName} onChange={handleOrgnameChange} required type="email" id="orgname" /><br></br>
                                </div>
                            </div>
                            {/* phone number input field*/}
                            <div>
                                <div class="">
                                    <label htmlFor="number " class="text-sm text-gray-600 ml-2">Number </label><br></br>
                                    <input value={number} onChange={handleNumberChange} class="hover:bg-blue-50 h-8 w-60 ml-2 outline-none border border-gray-300 rounded pl-2   shadow-sm" type="password" id="number" required /><br></br>
                                </div>
                                <div class="mt-4">
                                    <label htmlFor="password " class="text-sm text-gray-600 ml-2">Password </label><br></br>
                                    <input value={password} onChange={handlePasswordChange} class="hover:bg-blue-50 h-8 w-60 ml-2 outline-none border border-gray-300 rounded pl-2  shadow-sm" type="password" id="username" required /><br></br>
                                </div>
                                <div class="mt-4">
                                    <label htmlFor="users " class="text-sm text-gray-600 ml-2">Users </label><br></br>
                                    <select value={users} onChange={handleUsersChange} required class="hover:bg-blue-50 h-8 w-60 ml-2 outline-none border border-gray-300 rounded pl-2  shadow-sm">
                                        <option class="text-gray-100">--- select ---</option>
                                        <option> School</option>
                                        <option> Organization</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        {/* registeration button*/}
                        <div class="flex items-center justify-center">
                            <button name="submit" class="bg-blue-400 mt-14 border border-4 border-blue-200 w-40 h-10 rounded text-white">Register</button>
                        </div>

                        <div class="mt-6 flex items-center justify-center">
                            <p class="text-sm">Already have an account <Link class="text-blue-400" to="/">Signin</Link></p>
                        </div>

                        <div class="mt-6 flex items-center justify-center">
                            <p class="text-sm">Signing up means that you have accepted our<br></br> </p>
                        </div>
                        <div class=" flex items-center justify-center">
                            <p class="text-sm"><Link class="text-blue-400">Terms of Services</Link> and <Link class="text-blue-400">Privacy Policy</Link> </p></div>
                    </form>

                </div>
            </div>
        </div>
    )
}