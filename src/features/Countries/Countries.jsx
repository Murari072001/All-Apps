import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useGetCountriesQuery, useGetCountryByIdQuery } from "../../services/countriesApi";
import { Link } from "react-router-dom";

function Countries()
{
    var countries = useSelector(state=>state.countries)
    var dispatch = useDispatch()
    const {data,isLoading}=useGetCountriesQuery()
    // const {country} = useGetCountryByIdQuery()

    console.log(data);
    return (
        <div>
            {
                isLoading && <h1>Loading.......</h1>
            }
            <marquee behavior="" direction="">Hello welcome to the countires List</marquee>
            <div>
            <ul>
            {
                data?.map((a)=>{
                    return <li><Link to={`${a.ccn2}`}>{a.name.common}</Link></li>
                })
            }
            </ul>
            </div>
            
        </div>
    )
}

export default Countries