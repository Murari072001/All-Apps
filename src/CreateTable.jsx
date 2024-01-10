import React from "react";
import TableElements from "./TableElements";
function CreateTable()
{
    let [people,setPeople]=React.useState([])
    let [fn,setFn]=React.useState('')
    let [ln,setLn]=React.useState('')
    let [age,setAge]=React.useState('')
    let [city,setCity]=React.useState('')

    function add(){
        var obj={
            Firstname:fn,
            Lastname:ln,
            Age:age,
            City:city
        }
        setPeople([...people,obj])
    }

    return (
        <div>
            <div>
                Firstname:<input type="text" name="" id="" onKeyUp={(e)=>{setFn(e.target.value)}} />
                Lastname:<input type="text" name="" id="" onKeyUp={(e)=>{setLn(e.target.value)}} />
                Age:<input type="text" name="" id="" onKeyUp={(e)=>{setAge(e.target.value)}} />
                City:<input type="text" name="" id="" onKeyUp={(e)=>{setCity(e.target.value)}} />
                <button onClick={add}>Save</button>
            </div>
            <table border='1'>
                <thead>
                    <th>Firstname</th>
                    <th>Lastname</th>
                    <th>Age</th>
                    <th>City</th>
                </thead>
                <tbody>
                    {
                        people.map((person)=>{
                            return(
                                <TableElements person={person} />
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}

export default CreateTable