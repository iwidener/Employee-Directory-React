import React from "react";
import "./style.css";

function Navbar(props) {
    return (
        <nav className="navbar navbar-expand-lg navbar-secondary bg-secondary">
            <div className={`navbar${props.fluid ? "-fluid" : ""}`} {...props} />
            <nav type="text" />
        </nav>
    )
}

export default Navbar;