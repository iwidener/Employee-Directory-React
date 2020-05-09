import React from "react";

function Employee(props) {
    return (
        <div>
            <p>First Name: {props.firstName}</p>
            <p>Last Name: {props.lastName}</p>

        </div>
    )
}

export default Employee;