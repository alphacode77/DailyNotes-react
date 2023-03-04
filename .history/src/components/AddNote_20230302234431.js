import React, { useContext,useState } from 'react'
import NoteContext from '../Context/Notes/NoteContext'


const AddNote = () => {
  const context=useContext(NoteContext)
  const{addNote}=context

  const [note,setNote]=useState({note:"",title:"Title",description:"Description",tag:"General"})

  const handleClick=(e)=>{
    e.preventDefault();
    addNote(note.title,note.description,note.tag);

  }

  const onChange =(e)=>{
    setNote({...note,[e.target.name]:e.target.value})

  }
  return (
   <>
   <div className="container">
        <h3>Add Notes</h3>
        <form>
  <div className="mb-3 ">
    <label htmlFor="etitle" className="form-label">Title</label>
    <input type="text" className="form-control" id="etitle" name="etitle" aria-describedby="emailHelp" onChange={onChange}/>
   
  </div>
  <div className="mb-3">
    <label htmlFor="edescription" className="form-label">Description</label>
    <input type="text" className="form-control" id="edescription" name="description" onChange={onChange}/>
  </div>
  <div className="mb-3">
    <label htmlFor="etag" className="form-label">Tag</label>
    <input type="text" className="form-control" id="etag" name="etag" onChange={onChange}/>
  </div>
  <button type="submit" className="btn btn-primary" onClick={handleClick}>Add New Note</button>
</form>
</div>
   </>
  )
}

export default AddNote
