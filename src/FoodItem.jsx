import React from "react";

function FoodItem({item,quantitycount,i,removeitem})
        {
            return(
                <tr className="position-relative">
                    <td>{item.name}</td>
                    <td className="text-center d-flex justify-content-center align-items-center border border-0">
                        <button id="dec" onClick={(e)=>{quantitycount(e,i)}} className="btn ">-</button>
                        <span className='ms-1 me-1'>{item.count}</span>
                        <button id="inc" onClick={(e)=>{quantitycount(e,i)}} className="btn ">+</button>
                    </td>
                    <td className='bi bi-currency-rupee'>{item.price}</td>
                    <button onClick={()=>{removeitem(i)}} className='bi bi-x-square-fill border border-0 m-0 p-0 bg-transparent text-danger position-absolute top-0 end-0'></button>  
                </tr>
            )
        }

export default FoodItem