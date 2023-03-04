import React from "react";
import NoteContext from "./NoteContext"

const NoteState = (props)=>{

    return (
        <NoteContext.Provider>
            {props.child}
        </NoteContext.Provider>

    )
}

export default NoteState; 