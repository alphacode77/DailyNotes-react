{/*}
import React, { useContext, useEffect, useRef,useState } from 'react'
import NoteContext from "../Context/Notes/NoteContext"
import Noteitem from './Noteitem';
function Notes() {
  const context = useContext(NoteContext);
  const { notes, getNotes, editNote } = context
  const [note,setNote]=useState({id:"",etitle:"",edescription:"",etag:""})
  useEffect(() => {
    getNotes();
    //eslint-disable-next-line
  }, [])
  const refClose = useRef(null)
  const handleClick = (e) => {
    console.log("Daily notes is updating....")
    editNote(note.id,note.etitle,note.edescription,note.etag)
    refClose.current.click();

  }

  const onChange = (e) => {
    setNote({ ...notes, [e.target.name]: e.target.value })

  }
  const ref = useRef(null)


  const updateNote = (currentNote) => {
    ref.current.click();
    setNote({id:currentNote._id,etitle:currentNote.title, edescription:currentNote.edescription,etag:currentNote.tag})
  }

  return (
    <>
      <button type="button" ref={ref} className="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#exampleModal">
        Launch demo modal
      </button>
      <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">Reference</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <form>
                <div className="mb-3 ">
                  <label htmlFor="title" className="form-label">Title</label>
                  <input type="text" className="form-control" id="etitle" name="etitle" value={note.etitle} aria-describedby="emailHelp" onChange={onChange} />

                </div>
                <div className="mb-3">
                  <label htmlFor="description" className="form-label">Description</label>
                  <input type="text" className="form-control" id="edescription" name="edescription" value={note.edescription} onChange={onChange} />
                </div>
                <div className="mb-3">
                  <label htmlFor="tag" className="form-label">Tag</label>
                  <input type="text" className="form-control" id="etag" name="etag" value={note.etag} onChange={onChange} />
                </div>
              </form>
            </div>
            
            <div className="modal-footer">
              <button ref={refClose} type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button type="button" className="btn btn-primary" onClick={handleClick}>Update Changes</button>
              // <button type="submit" className="btn btn-primary" onClick={handleClick}>Update Changes</button> 

            </div>
          </div>
        </div>
      </div>
      <div className="row my-3">
        <h3>Your Notes</h3>
        {notes.map((note) => {
          return <Noteitem key={note._id} updateNote={updateNote} notess={note} />
        })}
      </div>
    </>
  )
}

export default Notes

*/}


