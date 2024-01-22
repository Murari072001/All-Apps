import React from "react";

function TableofCountries({countries,sort})
{
    return(
        <table className="table table-striped">
            <thead>
            <tr>
                <th onClick={(e)=>{sort(e)}} id='common'>Country</th>
                <th onClick={(e)=>{sort(e)}} id='capital'>Capital</th>
                <th onClick={(e)=>{sort(e)}} id='continents'>Continent</th>
                <th onClick={(e)=>{sort(e)}} id='ccn3'>ccn3</th>
            </tr>
            </thead>
            <tbody>
            {
                countries.map((a)=>{
                    return(
                        <tr>
                            <td>{a.name.common}</td>
                            <td>{a.capital}</td>
                            <td>{a.continents}</td>
                            <td>{a.ccn3}</td>
                        </tr>
                    )
                })
            }
            </tbody>
        </table>
    )
}

export default TableofCountries