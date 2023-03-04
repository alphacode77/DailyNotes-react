import React from "react";
import NoteContext from "./NoteContext"

const NoteState = (props)=>{
    const state={
        "name":"suraj",
        "class":"2b"
    }
    return (
        <NoteState.Provider value={state}>
            {props.children}
        </NoteState.Provider>

    )
}

export default NoteState; 