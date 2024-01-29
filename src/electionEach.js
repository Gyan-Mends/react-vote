// Election.js
import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import Nav from "./nav";

export default function ElectionEach() {
    const { electionId } = useParams();
    const [election, setElection] = useState(null)

    useEffect(() => {
        axios.get(`http://localhost/my-portfolio/src/backend/getElectionEach.php?electionId=${electionId}`)
            .then(response => {
                setElection(response.data)
            })
            .catch(error => {
                console.error("Error fetching elections:", error);
            })
    }, [electionId]);

    if (!election) {
        return <p className="text-semibold">Loading your data Please wait...</p>;
    }

    return (
        <div className="bg-gray-100 h-[100vh] flex">
            <div className="w-40 h-[100vh] bg-white shadow-md p-4">
                <Nav />
            </div>
            <div className="p-4">
                <div className="grid grid-cols-2 w-[80vw] h-12 rounded bg-white shadow-md p-2">
                    <div className="l">
                        <p className="text-gray-500">Pages/Elections</p>
                    </div>
                    <div className="text-right">
                        <Link to="/elections/add">
                            <button className="text-white rounded border border-2 border-blue-200 bg-blue-400 w-10 text-sm mr-auto">Add</button>
                        </Link>
                    </div>
                </div>
                <div>
                    {/* Render detailed election information using the 'election' state */}
                    <h2>{election.name}</h2>
                    <p>{`Start Date: ${election.election_id}`}</p>
                    <p>{`End Date: ${election.endDate}`}</p>
                </div>
            </div>
        </div>
    );
}
