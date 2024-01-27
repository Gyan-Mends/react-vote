import React from "react"
import { Link } from "react-router-dom"

export default function Nav(){
    return(
        <div>
             <li class="list-none text-gray-500 text-sm">
                    <Link to="/dashboard">Dashboard</Link>
                </li>
                <li class="list-none text-gray-500 text-sm mt-2">
                    <Link to="/VotersDetails">Voter</Link>
                </li>
                <li class="list-none text-gray-500 text-sm mt-2">
                    <Link to="/candidatesDetails">Candidates</Link>
                </li>
                <li class="list-none text-gray-500 text-sm mt-2">
                    <Link to="/results">Results</Link>
                </li>
                <li class="list-none text-gray-500 text-sm mt-2">
                    <Link to="/electionDetails">Elections</Link>
                </li>
                <li class="list-none text-gray-500 text-sm mt-2">
                    <Link to="">Settings</Link>
                </li>
                <li class="list-none text-gray-500 text-sm mt-2">
                    <Link to="">Pro</Link>
                </li>
        </div>
    )
}