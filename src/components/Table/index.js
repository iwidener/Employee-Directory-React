import React from "react";

function Table(props) {
    return (
        <table>
            <thead>
                <tr>
                    <th><strong>#</strong></th>
                    <th><strong>First Name</strong> {props.firstName} </th>
                    <th><strong>Last Name</strong> {props.lastName} </th>
                    <th><strong>Contact Phone</strong>{props.contactPhone} </th>
                </tr>
            </thead>
            <tbody>
                {
                    // props.data.map(row => (
                        <tr>
                            <td>{props.rank}</td>
                            <td>{props.firstName}</td>
                            <td>{props.lastName}</td>
                            <td>{props.contactPhone}</td>
                        </tr>
                    // ))      
                }
            </tbody>
        </table>
    )
}

export default Table;