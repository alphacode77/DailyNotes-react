import React,{useContext} from 'react'
import NoteState from '../Context/Notes/NoteState'

const About = () => {
    const a = useContext(NoteState)
  return (
    <div>
        <h1>This is About page of Daily notes : a.name</h1>
    </div>
  )
}

export default About
