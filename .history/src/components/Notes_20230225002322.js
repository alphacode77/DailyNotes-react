import React,{useContext} from 'react'


function Notes() {
    const context=useContext(NoteContext)
    const{notes,setNotes} = context
  return (
<div className="container my-2">
    <h3>Your Daily Notes</h3>
    {notes.map((notes)=>{
        return notes.title
    })}
</div>
  )
}

export default Notes
