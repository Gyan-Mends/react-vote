// Election.js
import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import axios from "axios";
import Nav from "./nav";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp } from "@fortawesome/fontawesome-free-regular";

export default function Election() {
    const [elections, setElections] = useState([]);
    const [loading, setLoading] = useState(true);
    const location = useLocation();

    useEffect(() => {
        axios.get("http://localhost/my-portfolio/src/backend/getElections.php")
            .then(response => {
                setElections(response.data);
            })
            .catch(error => {
                console.error("Error fetching elections:", error);
            })
            .finally(() => {
                setLoading(false);
            });
    }, []);

    if (loading) {
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
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mt-4">
                    {elections.map(election => (
                        <Link key={election.electionId} to={`/elections/${election.electionId}`}>
                            <div className="bg-white rounded-lg overflow-hidden shadow-md p-6">
                                <div className="flex items-center mb-4">
                                    <FontAwesomeIcon icon={faThumbsUp} className="text-blue-500 text-2xl" />
                                    <p className="text-lg ml-2 font-semibold">{` # ${election.tittle}`}</p>
                                </div>
                                <div className="bg-gray-100 rounded-lg p-3 mb-4">
                                    <p className="text-gray-600 mb-1">{`Start Date: ${election.startDate}`}</p>
                                    <p className="text-gray-600 mb-1">{`End Date: ${election.endDate}`}</p>
                                    <p className="text-gray-700">{`Election ID: ${election.electionId}`}</p>
                                </div>
                                <button className="bg-blue-400 w-60 h-8 rounded-md border border-4 border-blue-200 text-gray-200">Launch Election</button>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}
