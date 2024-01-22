import React from "react";
import axios from "axios";
import TableofCountries from "./TableofCountries";
import FilterItems from "./FilterItems";


function CountryList(){
    let checkedcountries=React.useRef([])
    let [sorttype,setsort]=React.useState(false)
    let [countries,setCountries]=React.useState([])
    let [filteredcountries,setFiltered]=React.useState([])
    React.useEffect(()=>{
        axios.get('https://restcountries.com/v3.1/all').then((a)=>{
            setCountries([...a.data]);
            setFiltered([...a.data])
        });
    },[])

    function sort(e)
    {
        console.log(sorttype);
            var sorted=filteredcountries.sort((a,b)=>{
                if(e.target.id==='common'?a.name[e.target.id]>b.name[e.target.id]:a[e.target.id]>b[e.target.id])
                return sorttype?1:-1
                else if(e.target.id==='common'?a.name[e.target.id]<b.name[e.target.id]:a[e.target.id]<b[e.target.id])
                return sorttype?-1:1
                else 
                return 0
            })
            setsort(!sorttype)
            setFiltered([...sorted])
    }


    function HandleCheckbox(e){
        setFiltered(countries)
        if(e.target.checked)
        {
            checkedcountries.current=[...checkedcountries.current,e.target.value]
        }
        else{
            checkedcountries.current=checkedcountries.current.filter((a)=>{
                return a!==e.target.value
            })
        }
        console.log(checkedcountries.current);
        var fil=countries.filter((a)=>{
            return (checkedcountries.current.some(()=>{ return checkedcountries.current.includes(a.continents.toString())}))
        })
        setFiltered([...fil])
    }

    return(
        <>
        {/* {console.log(filteredcountries)} */}
        <div className="d-flex">
        <div className="w-25"><FilterItems HandleCheckbox={HandleCheckbox} ></FilterItems></div>
        <div className="w-75"><TableofCountries countries={filteredcountries} sort={sort}></TableofCountries></div>
        </div>
        </>
    )
}

export default CountryList