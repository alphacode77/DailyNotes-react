import React from 'react'

const Noteitem=(props)=> {
    const {note}=props
  return (
    <div className='col-md-3'>
        <div className='card'>
            <div className='card-body my-3'>
              <div className='d-flex align-items-center'>
              <h5 className='card-title'>{note.title}</h5>
              <i className="fa-solid fa-trash mx-1"></i>
              <i className="fa-regular fa-pen-to-square mx-1"></i>
              </div>
                <p className='card-text'>{note.description}</p>  
            </div>
        </div>
    </div>
  )
}

export default Noteitem

