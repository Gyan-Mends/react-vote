// ElectionDetail.js
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function ElectionDetail() {
    const { id } = useParams();
    const [election, setElection] = useState(null);

    useEffect(() => {
        axios.get(`http://localhost/my-portfolio/src/backend/getElectionDetails.php?id=${id}`)
            .then(response => {
                setElection(response.data);
            })
            .catch(error => {
                console.error("Error fetching election details:", error);
            });
    }, [id]);

    if (!election) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            {/* Render detailed election information using the 'election' state */}
            <h2>{election.title}</h2>
            <p>{`Start Date: ${election.startDate}`}</p>
            <p>{`End Date: ${election.endDate}`}</p>
            {/* Add more details as needed */}
        </div>
    );
}
