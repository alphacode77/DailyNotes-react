import React from 'react'

const Noteitem = (props) => {
  const {note}=props
  return (
    <>
    <div className='container'>
      {note.title}
      {note.description}

      
    </div>
    </>
  )
}

export default Noteitem