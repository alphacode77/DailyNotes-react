import React from 'react'

const Noteitem=(props)=> {
    const {note}=props
  return (
    <div className='col-md-3'>
        <div className='card'>
            <div className='card-body my-3'>
                <h5 className='card-title'>{note.title}</h5>
                    <p className='card-text'>{note.description}</p>  
                    <i class="fa-solid fa-trash"></i>
                    <i class="fa-regular fa-pen-to-square mx-3"></i>
            </div>
        </div>
    </div>
  )
}

export default Noteitem

