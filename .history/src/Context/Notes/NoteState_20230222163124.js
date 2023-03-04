import React,{useState} from "react";
import NoteContext from "./NoteContext"


const NoteState = (props)=>{
    const s1={
        "name":"suraj",
        "class":"2b"
    }
    const [state,setState] = useState(s1)
    const update = ()=>{
        setTimeout(()=>{
            setState(
                s1={
                    "name":"vinod",
                    "class":"3b"
                }
                )
            
        },2000)
    }
    return (
        <NoteContext.Provider value={{state,update}}>
            {props.children}
        </NoteContext.Provider>

    )
}

export default NoteState; 