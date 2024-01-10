import React from "react";
import BillDesk from "./BillDesk";
import Table from "./Table";
import Header from "./Header";
import alltables from "./tabledetails";
import './index.css'

function App() 
{
  var [tables,setTables]=React.useState(alltables)
  var [selectedTable,setSelectedTable]=React.useState(null)

  function booktable()
  {
      var temp=tables.map((a)=>{
          if(a.tableId===selectedTable.tableId)
          a.vacancy=false
          return a
      })
      setTables([...temp])
  }

  function unbook()
  {
      var temp=tables.map((a)=>{
          if(a.tableId===selectedTable.tableId)
          a.vacancy=true
          return a
      })
      setTables([...temp])
  }

  function addItem(item)
  {
      var temp=tables.map((a)=>{
          if(a.tableId===selectedTable.tableId)
          a.currentordereditems.push({...item,count:1})
          return a
      })
      setTables([...temp])
  }

  function quantitycount(e,i)
  {                
      var temp=tables.map((a)=>{
      if(a.tableId===selectedTable.tableId)
      {   
          if(e.target.id==="inc")
          a.currentordereditems[i].count++
          if(e.target.id==="dec"&&a.currentordereditems[i].count!==1)
          a.currentordereditems[i].count--
      }
          return a
      })
      setTables([...temp]) 
  }

  function removeitem(i)
  {
      if(window.confirm("Are You Really Want to Remove This Item???\nIf Yes Click On Ok or click on Cancel!!!!"))
      {
          var temp=tables.map((a)=>{
          if(a.tableId===selectedTable.tableId)
          a.currentordereditems.splice(i,1)
          return a
      })
      setTables([...temp])  
      }
  }

  function checkout()
  {
      var temp=tables.map((a)=>{
          if(a.tableId===selectedTable.tableId)
          {
              a.previousordereditems.push([...a.currentordereditems])
              a.currentordereditems=[];
              a.vacancy=true;
          }
          return a
      })
      setTables([...temp])  
  }

  return(
      <div className='container p-2 border border-dark'>    
          <Header/>
          <div className='m-2 p-2 border border-primary d-flex'>
              <div className='alltables w-50 d-flex flex-wrap justify-content-center m-2 p-2 border border-secondary'>
                  {tables.map((a)=>{
                      return(<Table table={a} setSelectedTable={setSelectedTable}/>)
                  })}    
              </div>
              <div className="w-50 m-2 p-2 border border-danger">
                  <BillDesk selectedTable={selectedTable} removeitem={removeitem} checkout={checkout} unbook={unbook} quantitycount={quantitycount} booktable={booktable} addItem={addItem} />    
              </div>
          </div>
      </div>
  )
}

export default App;
