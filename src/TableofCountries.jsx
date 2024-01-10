import React from "react";

function TableofCountries({countries})
{
    return(
        <table className="table table-striped ">
            <tr>
                <th>Country</th>
                <th>Capital</th>
                <th>Continent</th>
            </tr>
            {
                countries.map((a)=>{
                    return(
                        <tr>
                            <td>{a.name.official}</td>
                            <td>{a.capital}</td>
                            <td>{a.continents}</td>
                        </tr>
                    )
                })
            }
        </table>
    )
}

export default TableofCountries