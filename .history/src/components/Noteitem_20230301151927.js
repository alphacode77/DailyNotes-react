import React, { useContext } from 'react'
import NoteContext from '../Context/Notes/NoteContext'


const Noteitem = (props) => {
  const context = useContext(NoteContext)
  const {deleteNote}=context
  const {editNote}=context
  const { notess } = props
  return (
    <>
      <div className='col-md-3'>
        <div className="card my-3">
          <div className="card-body">
            <h5 className="card-title">{notess.title}</h5>
            <p className="card-text">{notess.description}</p>
            <i className="fa-sharp fa-regular fa-trash mx-2" onClick={()=>{deleteNote(notess._id)}}></i>
          <i className="fa-regular fa-pen-to-square" onClick={()=>{editNote(notess._id,notess.description)}}></i>

          </div>
        </div>
      </div>
      
      
    </>
  )
}

export default Noteitem