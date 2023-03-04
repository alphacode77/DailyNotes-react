import React, { useState,useContext } from 'react'
import NoteContext from '../Context/Notes/NoteContext'
import Notes from './Notes'

function AddNote() {
    const context=useContext(NoteContext)
    const{addNote} = context

    const [note,setNotes]=useState({title:"",description:""})
    const handleClick = ()=>{

    }

    const onChange = ()=>{
      setNotes({...note})
    }
  return (
    <>
            <div className="container my-3">
            <h2> Add Daily Notes</h2>
        <form className="my-2">
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={onChange}/>
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1"/>
  </div>
  <div className="mb-3 form-check">
    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
    <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
  </div>
  <button type="submit" className="btn btn-primary" onClick={handleClick}>Submit</button>
</form>
<Notes/>
</div>
    </>
  )
}

export default AddNote
