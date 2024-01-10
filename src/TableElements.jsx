import React from "react";

function TableElements({person})
{    return(
        <tr>
            <td>{person.Firstname}</td>
            <td>{person.Lastname}</td>
            <td>{person.Age}</td>
            <td>{person.City}</td>
        </tr>
    )
}
export default TableElements