import React from "react";
function Table(props) {
    return (
        <table>
            <thead>
                <tr>
                    <th>#</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Conatct Phone</th>
                </tr>
            </thead>
            <tbody>
                {
                    props.data.map(row => (
                        <tr>
                            <td>{row.rank}</td>
                            <td>{row.firstName}</td>
                            <td>{row.lastName}</td>
                            <td>{row.contactPhone}</td>
                        </tr>
                    ))
                    
                }
            </tbody>
        </table>
    )
}

export default Table;