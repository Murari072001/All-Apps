import React, { useEffect } from "react";
import { useGetCountryByIdQuery } from "../../services/countriesApi";
import { useParams } from "react-router-dom";

function CountryDetails()
{
    var cid=useParams()
    var [country,x]=useGetCountryByIdQuery(cid)
}

export default CountryDetails