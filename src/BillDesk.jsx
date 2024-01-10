import React from "react";
import FoodItem from "./FoodItem";
import menuitems from "./menucard";

function BillDesk({selectedTable,removeitem,booktable,addItem,quantitycount,unbook,checkout})
        {
            return(
                selectedTable&&<div>
                    <h3>Selected Table Id:  {selectedTable?.tableId.toUpperCase()}</h3> 
                    <h3>Number of Seats:  {selectedTable?.seats}</h3>
                    {selectedTable.vacancy&& <button className="btn btn-success" onClick={booktable}>Book Table</button>  } 
                    {!(selectedTable.vacancy)&&<> 
                            <button className="btn btn-danger m-2">Booked</button>
                            <label for="menu">Please select the Food Item</label>
                            <select name="" id="menu"onChange={(e)=>{addItem(JSON.parse(e.target.value))}}>
                                <option value="please select the food" disabled selected>--please select the food--</option>
                                {
                                    menuitems.map((a)=>{
                                        return <option value={JSON.stringify(a)}>{a.name}</option>
                                    })
                                }
                            </select>
                            <table className="table table-striped ">
                                <thead>
                                    <tr>
                                        <th>Item Name</th>    
                                        <th className="text-center">Quantity</th>    
                                        <th>Price</th>    
                                    </tr>    
                                </thead>
                                <tbody>
                                    {selectedTable.currentordereditems.map((a,i)=>{
                                    return( <FoodItem item={a} i={i} removeitem={removeitem} quantitycount={quantitycount} /> )
                                    })}     
                                </tbody>
                                <tfoot>
                                    {<tr>
                                        <th><h3>Total Bill:</h3></th>
                                        <th className='text-center'>{selectedTable.currentordereditems.reduce((a,b)=>{
                                            return a+(b.count)
                                            },0)}
                                        </th>
                                        <th className='bi bi-currency-rupee'>{selectedTable.currentordereditems.reduce((a,b)=>{
                                            return a+(b.price*b.count)
                                            },0)}
                                        </th>
                                    </tr>} 
                                </tfoot>  
                            </table>
                            {!selectedTable.currentordereditems.length>0&& <button className='btn btn-danger w-100' onClick={unbook}>Cancel The Table</button>}
                            {selectedTable.currentordereditems.length>0&& <button className='btn btn-warning w-100' onClick={checkout}>Check Out</button> }
                    </>}
                </div>
            )
        }

export default BillDesk