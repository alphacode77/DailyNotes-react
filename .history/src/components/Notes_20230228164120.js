import React,{ useContext } from 'react'
import NoteContext from "../Context/Notes/NoteContext"
import Noteitem from './Noteitem';

function Notes() {
  const context = useContext(NoteContext);
  const{notes,setNotes} = context
  return (
  <>
  <div className="rowr">
  <h3>Your Notes</h3>
  {notes.map((note)=>{
    return <Noteitem  note={note} />
  })}
</div>
  </>
  )
}

export default Notes
