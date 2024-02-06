import React, { useEffect } from "react";
import { useAddSelectedPlayersMutation, useLazyGetAllPlayersQuery, useLazyGetSelectedPlayersQuery, useUpdateSelectedMutation } from "../../services/jsonApi";

function AllPlayers()
{
    var [getAllPlayers,data] =useLazyGetAllPlayersQuery()
    var [addplayer]=useAddSelectedPlayersMutation()
    var [updateplayer]=useUpdateSelectedMutation()
    var [getselected]=useLazyGetSelectedPlayersQuery()
    useEffect(()=>{
        getAllPlayers()
    },[])
    const handleAdd=(player)=>
    {
        if(!player.isSelected)
        {
            updateplayer(player)
            addplayer(player).then(()=>{
                getselected()
                getAllPlayers()
            })
            
        }
    }
    console.log(data);
        return(
            <div className="w-50 border border-danger border-3 text-center">
                <h2>All Players</h2>
                {
                    !(data?.isLoading)&&<div className="d-flex flex-wrap justify-content-between">
                            {data?.data?.map((player)=>{
                                return (
                                    <div className={player.isSelected?"rounded-3 player selected":"border border-3 border-success rounded-3 player"} onClick={()=>{handleAdd(player)}}>
                                        <h1>{player.id}</h1>
                                    </div>
                                )
                            })}
                    </div>
                }
            </div>
        )
}

export default AllPlayers