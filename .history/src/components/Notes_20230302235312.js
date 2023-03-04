import React,{ useContext,useEffect, useRef } from 'react'
import NoteContext from "../Context/Notes/NoteContext"
import Noteitem from './Noteitem';


function Notes() {
  const context = useContext(NoteContext);
  const{notes,getNotes} = context
  useEffect(()=>{
      getNotes();
      //eslint-disable-next-line
  },[])

  const handleClick=(e)=>{
    e.preventDefault();
    addNote(note.title,note.description,note.tag);

  }

  const onChange =(e)=>{
    setNote({...note,[e.target.name]:e.target.value})

  }
  const ref=useRef(null)
  
  const updateNote =(notes)=>{
        ref.current.click();
  }

  return (
  <>
  <button type="button" ref={ref} class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
  Launch demo modal
</button>
<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Reference</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
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
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>
  <div className="row my-3">
  <h3>Your Notes</h3>
  {notes.map((note)=>{
    return <Noteitem  key={note._id} updateNote={updateNote} notess={note} />
  })}
</div>
  </>
  )
}

export default Notes
