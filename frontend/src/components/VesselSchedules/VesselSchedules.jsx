import React, { useState, useMemo, useEffect } from "react";
import FilteringTable from "../Table/FilteringTable";
import { COLUMNS } from "./columns";
import MOCK_DATA from "./MOCK_DATA.json";


function VesselSchedules() {
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetchItems();
    }, [])

    const fetchItems = async () => {
        fetch("http://localhost:8080/vessels")
            .then(response => response.json())
            .then(items => {
                setItems(items)
            })
        console.log("yo");
        console.log(items);
    };


    const columns = useMemo(() => COLUMNS, []);
    const data = useMemo(() => items, []);

    return <div className="table-page-main-container">
        <center>
            <FilteringTable columns={columns} data={items} placeholder="Search for the details of the vessel." title="Vessel Schedule" url="vesselSchedules" />
        </center>
    </div>
}

const mapStateToProps = (state) => ({
    isAuthenticated: state.auth.isAuthenticated,
    user: state.auth.user
})

export default VesselSchedules;
