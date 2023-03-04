import React,{useContext} from 'react'
import NoteContext from '../Context/Notes/NoteContext'
const About = () => {
    const a = useContext(NoteContext)
  return (
    <div>
        <h1>This is About page of Daily notes : {a.name}</h1>
    </div>
  )
}

export default About
