import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useGetCountriesQuery, useGetCountryByIdQuery } from "../../services/countriesApi";

function Countries()
{
    var countries = useSelector(state=>state.countries)
    var dispatch = useDispatch()
    const {data,isLoading}=useGetCountriesQuery()
    const {country} = useGetCountryByIdQuery()

    console.log(data);
    return (
        <div>
            {
                isLoading && <h1>Loading.......</h1>
            }
            <div>
            {
                data?.map((a)=>{
                    return <li onClick={}>{a.name.common}</li>
                })
            }
            </div>
            <div>
                {country&&<h1>{country.name.common}</h1>}
            </div>
        </div>
    )
}

export default Countries