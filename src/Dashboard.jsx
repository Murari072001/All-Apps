import React from "react";
import { connect } from "react-redux";

function UserDashBoard(props)
{
    console.log('dash',props);
    return (
       <div>
         <h1>UserDash board</h1>
         <h1>Welcome:{props.login[0].firstname}</h1>
       </div>
    )
}
const mapStateToProps=(state)=>{
    return state.login
}
function mapDispatchToProps(dispatch){
    return {
        inc:()=>{dispatch({})}
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(UserDashBoard)