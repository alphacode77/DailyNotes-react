import React from 'react'

function Notes() {
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
