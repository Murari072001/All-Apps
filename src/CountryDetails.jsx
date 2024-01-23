import React from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function CountryDetails()
{
    var [details,setDetails]=React.useState([])
    var param=useParams({})
    React.useEffect(()=>{
        axios.get(`https://restcountries.com/v3.1/alpha/${param.cname}`).then((res)=>{setDetails(res.data[0]);})
    },[param])
    return(
        <>
            <div>
                <h5>Country Name:{details.name?.common}</h5>
                <h5>Country Capital:{details?.capital}</h5>
                <h5>Country Sub Region:{details?.subregion}</h5>
                <h5>Country Population:{details?.population}</h5>
                <img src={details.flags?.png} alt="" />
            </div>
        </>
    )
}

export default CountryDetails