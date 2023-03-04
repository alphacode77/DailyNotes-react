import React, { useContext } from 'react'
import NoteContext from '../Context/Notes/NoteContext'


const AddNote = () => {
  const context=useContext(NoteContext)
  const{addNote}=context
  const handleClick=()=>{

  }
  return (
   <>
   <div className="container">
        <h3>Add Notes</h3>
        <form>
  <div className="mb-3 ">
    <label htmlFor="title" className="form-label">Title</label>
    <input type="text" className="form-control" id="title" name="title" aria-describedby="emailHelp"/>
   
  </div>
  <div className="mb-3">
    <label htmlFor="description" className="form-label">Description</label>
    <input type="text" className="form-control" id="description" name="description"/>
  </div>
  <div className="mb-3 form-check">
    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
    <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
  </div>
  <button type="submit" className="btn btn-primary" onClick={handleClick}>Submit</button>
</form>
</div>
   </>
  )
}

export default AddNote
