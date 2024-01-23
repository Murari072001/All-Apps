import React from "react";
import axios from 'axios'
import Header from "./Header";
import { Outlet, useNavigate } from "react-router-dom";
function Countries() {
    var [countries, setCountries] = React.useState([])
    var [sorttype,setSort]=React.useState(false)
    React.useEffect(() => {
        axios.get('https://restcountries.com/v3.1/all').then((res) => { setCountries(res.data) })
    }, [])
    const Navigate=useNavigate()
    const CountryDetails=(e)=>{
        Navigate(`countrydetails/${e}`)
    }
    function sort()
    {
        
        var count=countries.sort((a,b)=>{
            if(a.name.common>b.name.common)
            return sorttype?1:-1
            else if(a.name.common<b.name.common)
            return sorttype?-1:1
        else return 0
        })
        setSort(!sorttype)
        setCountries(count)
    }
    return (
        <>
            <Header></Header>
            <h1 className="text-center">List of All Countries</h1>
            <div className="d-flex flex-wrap container position-rela">
                <div style={{ width: "52%" }}>
                    <div>
                        <table className="table table-success table-striped">
                            <thead>
                                <tr>
                                    <th onClick={sort}>Country Name</th>
                                    <th>Capital</th>
                                    <th>Continent</th>
                                    <th>Sub Region</th>
                                </tr>

                            </thead>
                            <tbody>
                            {
                                countries?.map((country) => {
                                    return (

                                        <tr>
                                            <td onClick={()=>{CountryDetails(country.cca2)}}>{country.name.common}</td>
                                            <td className="text-decoration-none">{country.capital?.map((a)=>{return <li>{a}</li>})}</td>
                                            <td>{country.continents}</td>
                                            <td>{country.subregion}</td>
                                        </tr>
                                    )
                                })
                            }
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className="ms-3 sticky-top">
                    <Outlet></Outlet>
                </div>
            </div>
        </>
    )
}

export default Countries