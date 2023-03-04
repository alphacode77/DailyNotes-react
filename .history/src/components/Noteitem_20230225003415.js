import React from 'react'

const Noteitem=(props)=> {
    const {note}=props
  return (
    <div className='col-md-3'>
        <div className='card'>
            <div className='card-body'>
                <div className='card-title'>{note.title}</div>
                    <div className='card-text'>{note.description}</div>
                
            </div>
        </div>
      {note.title}
      {note.description}
    </div>
  )
}

export default Noteitem

