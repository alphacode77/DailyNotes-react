import React,{useContext} from 'react'
import NoteContext from '../Context/Notes/NoteContext'
import Noteitem from "./Noteitem"

function Notes() {
    const context=useContext(NoteContext)
    const{notes,setNotes} = context
  return (
<div className="row my-2">
    <h3>Your Daily Notes</h3>
    {notes.map((notes)=>{
        return <Noteitem key={notes._id} note={notes}/>
    })}
</div>
  )
}

export default Notes
