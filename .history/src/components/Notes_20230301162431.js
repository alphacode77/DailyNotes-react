import React,{ useContext, useEffect } from 'react'
import NoteContext from "../Context/Notes/NoteContext"
import Noteitem from './Noteitem';

function Notes() {
  const context = useContext(NoteContext);
  const{notes} = context
  // useEffect(()=>{
  //     getNotes();
  // },[])
  return (
  <>
  <div className="row my-3">
  <h3>Your Notes</h3>
  {notes.map((note)=>{
    return <Noteitem  key={note._id} notess={note} />
  })}
</div>
  </>
  )
}

export default Notes
