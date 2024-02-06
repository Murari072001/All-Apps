import React from "react";
import { useDelSelectedPlayersMutation, useGetSelectedPlayersQuery, useLazyGetAllPlayersQuery, useLazyGetSelectedPlayersQuery, useUpdateSelectedMutation } from "../../services/jsonApi";

function SelectedPlayers()
{
    var {isLoading,data}=useGetSelectedPlayersQuery()
    var [updateplayer]=useUpdateSelectedMutation()
    var [del]=useDelSelectedPlayersMutation()
    var [getSelected]=useLazyGetSelectedPlayersQuery()
    var [getAll]=useLazyGetAllPlayersQuery()
    function handlePlayers(player)
    {
        updateplayer(player)
        del(player).then(()=>{
            getSelected()
            getAll()
        })
    }
    
    return(<div className="w-50 border border-primary border-3 text-center">
        <h2>Selected Players</h2>
        {
            !isLoading&&<div className="d-flex flex-wrap">
                    {data?.map((player)=>{
                        return (
                            <div className="player border border-3 border-primary rounded-3" onClick={()=>{handlePlayers(player)}}>
                                <h1>{player.id}</h1>
                            </div>
                        )
                    })}
            </div>
        }
    </div>)

}

export default SelectedPlayers