import React from 'react'

const Noteitem=(props)=> {
    const {note}=props
  return (
    <div className='col-md-3'>
        <div className='card'>
            <div className='card-body'>
                <h4 className='card-title'>{note.title}</h4>
                    <p className='card-text'>{note.description}</p>
                
            </div>
        </div>
      {note.title}
      {note.description}
    </div>
  )
}

export default Noteitem

