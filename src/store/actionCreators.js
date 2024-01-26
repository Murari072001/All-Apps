export function actupnewtodo(e){
    return {type: 'newtodo', payload: e}
}

export function acttogglestatus(ind){
    return { type: 'togglestatus', index: ind }
}

export function actdelete(ind){
    return { type: 'delete', index: ind }
}

export function actadd(){
    return { type: "addtodo" }
}

export function acttoggleupdate(i){
    return {type:'toggleupdate',index:i}
}

export function actupdate(){
    return {type:'update'}
}
