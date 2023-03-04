import React from 'react'
import NoteContext from "../Context/Notes/NoteContext"

function Notes() {
  const context = useContext(NoteContext);
  const{notes,setNotes} = context
  return (
  <>
  <div className="container">
  <h3>Your Notes</h3>
  {notes.map((note)=>{
    return note.title;
  })}
</div>
  </>
  )
}

export default Notes
