import React from "react";

function Table({table,setSelectedTable})
        {console.log(table)
            return(
                <div className="w-25 text-center m-2 p-2"  onClick={()=>{setSelectedTable(table)}} style={table.vacancy?{border:"5px solid green"}:{border:"5px solid red"}}>
                    <h3>{table.tableId.toUpperCase()}</h3>
                    <h5>Seats:{table.seats}</h5>
                </div>
            )
        }

export default Table