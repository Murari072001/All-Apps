import React from 'react';
import './App.css';
import HeaderTodo from './HeaderTodo';
import InputTodo from './InputTodo';
import TodoBox from './TodoBox';

function App() {
  var [item,setitem]=React.useState([])
  var [mainitem,setmainitem]=React.useState([])
  var [isupdate,setisupdate]=React.useState(false)
  var [index,setindex]=React.useState(null)
  
  function add()
  {
      var taskitem=document.getElementById("input").value;
      document.getElementById("input").value="";
      setmainitem([...item,{task:taskitem,status:false}])
      setitem([...item,{task:taskitem,status:false}])
      
  }
  function update()
  {
      mainitem[index].task=document.getElementById("input").value;
      document.getElementById("input").value=''
      setmainitem([...mainitem])
  }
  function done(i)
  {
      console.log(i);
      mainitem[i].status=true
      setitem([...mainitem])
  }
  function undo(i)
  {
      mainitem[i].status=false
      setitem([...mainitem])
  }
  function edit(i)
  {
      document.getElementById("input").value=mainitem[i].task;
      setindex(i)
      setisupdate(!isupdate)
  }
  function del(i)
  {
      if(window.confirm("Are sure to delete this Task?\n If YES please click OK! or else click CANCEL!!"))
      {
          mainitem.splice(i,1);
      setitem([...mainitem])
      }
  }
  function filteritem(sort)
  {
      var temp=[...mainitem];
      if(sort==='complete')
      temp=mainitem.filter(a=>{return a.status})
      if(sort==='incomplete')
      temp=mainitem.filter(a=>{return !a.status})
      setitem([...temp])
  }
  return(
      <div className="container p-4 border border-dark border-3">
          <HeaderTodo mainitem={mainitem} filteritem={filteritem}/>    
          <InputTodo add={add} update={update} isupdate={isupdate}/>    
          <TodoBox item={item} done={done} undo={undo} edit={edit} del={del} />    
      </div>
  )
}

export default App;
