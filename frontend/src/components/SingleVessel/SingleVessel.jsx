import React, { useState, useEffect } from "react";
import "./SingleVessel.css";

export default function SingleVessel({match}) {
    const [item, setItem] = useState({
        abbrVslM: "",
        avg_SPEED: "",
        berthN: "",
        bthgDt: "",
        count: "",
        displayColor: "",
        distance_TO_GO: "",
        firstBthgDt: "",
        fullInVoyN: "",
        fullVslM: "",
        inVoyN: "",
        is_PATCHING_ACTIVATED: "",
        max_SPEED: "",
        outVoyN: "",
        patching_PREDICTED_BTR: "",
        predicted_BTR: "",
        shiftSeqN: null,
        status: "",
        unbthgDt: "",
        vessel_NAME: "",
        voyage_CODE_INBOUND: "",
        vsl_VOY: ""
    });

    useEffect(() => {
        fetchItems();
    }, [])

    const fetchItems = async () => {
        fetch(`http://localhost:8080/vessels/${match.params.fullVslM}/${match.params.inVoyN}`)
            .then(response => response.json())
            .then(items => {
                setItem(items)
            })
    };

    return <div className="law-firm-main-container">
        <div className="container">
            <h1 className="heading">{item.vessel_NAME}</h1>
            <div class="row custom-row">
                <div class="col-6">
                    <p><span className="category">Incoming Voyage Number:</span> {item.inVoyN == null ? "N/A" : item.inVoyN}</p>
                    <p><span className="category">Outgoing Voyage Number:</span> {item.outVoyN == null ? "N/A" : item.outVoyN}</p>
                    <p><span className="category">Average Speed:</span> {item.avg_SPEED == null ? "N/A" : item.avg_SPEED}</p>
                    <p><span className="category">Maximum Speed:</span> {item.max_SPEED == null ? "N/A" : item.max_SPEED}</p>
                    <p><span className="category">Berth Number:</span> {item.berthN == null ? "N/A" : item.berthN}</p>
                    <p><span className="category">Distance To Go:</span> {item.distance_TO_GO  == null ? "N/A" : item.distance_TO_GO} </p>
                    {item.is_PATCHING_ACTIVATED == 0 ? <p><span className="category">Berthing Time: </span> {item.predicted_BTR == null ? "N/A" : item.predicted_BTR} </p> : <p><span className="category">Berthing Time</span> {item.patching_PREDICTED_BTR == null ? "N/A" : item.patching_PREDICTED_BTR} </p>}
                    <p><span className="category">Unberthing Time:</span> {item.unbthgDt == null ? "N/A" : item.unbthgDt} </p>
                    <p><span className="category">Status:</span> {item.status == null ? "N/A" : item.status} </p>
                </div>
                <div class="col-6">
                </div>
            </div>
        </div>
    </div>
}
