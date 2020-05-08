import React from "react";

function Navbar(props) {
    return (
        <nav className="navbar navbar-expand-lg navbar-secondary bg-secondary">
            <div className={`navbar${props.fluid ? "-fluid" : ""}`} {...props} />

            <nav type="text" placeholder="Search" className="mr-sm-2"  sticky="bottom" />
        </nav>
    )
}

export default Navbar;