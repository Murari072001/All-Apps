import React, { useEffect } from "react";
import { useGetCountryByIdQuery } from "../../services/countriesApi";
import { useParams } from "react-router-dom";

function CountryDetails()
{
    var cid=useParams().cid
    var {data,isLoading}=useGetCountryByIdQuery(cid)
    return (
        <div>
            {
                isLoading&&<h3>Loading........</h3>
            }
            {
                data&&<div>
                    <h2>{data[0].name.common}</h2>
                    <img src={data[0].flags.png} alt="" />
                </div>
            }
        </div>
    )
}

export default CountryDetails