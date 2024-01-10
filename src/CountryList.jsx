import React from "react";
import axios from "axios";
import TableofCountries from "./TableofCountries";
import FilterItems from "./FilterItems";


function CountryList(){
    let [checkedcountries,setChecked]=React.useState([])
    let [countries,setCountries]=React.useState([])
    let [filteredcountries,setFiltered]=React.useState([])
    React.useEffect(()=>{
        axios.get('https://restcountries.com/v3.1/all').then((a)=>{
            setCountries([...a.data])
        });
        setFiltered(countries)
    },[])
    console.log(countries);

    function HandleCheckbox(e){
        setFiltered(countries)
        if(e.target.checked)
        {
            setChecked([...checkedcountries,e.target.value])
        }
        else{
            setChecked([...checkedcountries.map((a)=>{
                return a!==e.target.value
            })])
        }
        setFiltered([...filteredcountries.map((a)=>{
            return (
                checkedcountries.some((b)=>{
                    return a;
                })
            )
        })])
    }

    return(
        <>
        
        <div>
        <FilterItems HandleCheckbox={HandleCheckbox} ></FilterItems>
        <TableofCountries countries={countries}></TableofCountries>

        </div>
        </>
    )
}

export default CountryList