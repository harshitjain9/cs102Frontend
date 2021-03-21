import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
    return (
        <header>
            <div className="upper-header">
            <div className="container">
                <div className="blog-header py-3">
                    <div className="row flex-nowrap justify-content-between align-items-center">
                        <div className="col-4 pt-1">
                        </div>
                        <Link to="/"><img className="logo-img"/></Link>
                        <div className="col-4 d-flex justify-content-end align-items-center">
                            {/* {auth && auth.isAuthenticated ? authLinks : guestLinks} */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="lower-header">
            <div className="nav-scroller py-1 container">
                <nav className="nav d-flex justify-content-between">
                    <Link className="p-2 header-link" to="/">Vessel Schedule</Link>
                    <Link className="p-2 header-link" to="/alertsConfigured">Alerts Configured</Link>
                    <Link className="p-2 header-link" to="/alertsTriggered">Alerts Triggered</Link>
                </nav>
            </div>
        </div>
        </header>
    );
}

export default Header;