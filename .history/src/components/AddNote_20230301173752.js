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
    <label htmlFor="title" className="form-label">Title</label>
    <input type="text" className="form-control" id="title" name="title" aria-describedby="emailHelp" onChange={onChange}/>
   
  </div>
  <div className="mb-3">
    <label htmlFor="description" className="form-label">Description</label>
    <input type="text" className="form-control" id="description" name="description" onChange={onChange}/>
  </div>
  <div className="mb-3">
    <label htmlFor="tag" className="form-label">Tag</label>
    <input type="text" className="form-control" id="tag" name="tag" onChange={onChange}/>
  </div>
  <button type="submit" className="btn btn-primary" onClick={handleClick}>Add New Note</button>
</form>
</div>
   </>
  )
}

export default AddNote
