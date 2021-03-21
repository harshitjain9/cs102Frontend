import React, { useState, useMemo, useEffect } from "react";
import FilteringTable from "../Table/FilteringTable";
import { COLUMNS } from "./columns";
import MOCK_DATA from "./MOCK_DATA.json";


function AlertsTriggered() {
    const [items, setItems] = useState([]);
    const columns = useMemo(() => COLUMNS, []);
    const data = useMemo(() => items, []);

    return <div className="table-page-main-container">
        <center>
            <FilteringTable columns={columns} data={MOCK_DATA} placeholder="Search for the details of the vessel." title="Alerts Triggered" url="jobopportunities" />
        </center>
    </div>
}

const mapStateToProps = (state) => ({
    isAuthenticated: state.auth.isAuthenticated,
    user: state.auth.user
})

export default AlertsTriggered;
