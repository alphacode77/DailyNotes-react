import React,{useContext,useEffect} from 'react'
import NoteContext from '../Context/Notes/NoteContext'

const About = () => {
    const a = useContext(NoteContext)
    useEffect(()=>{
        a.update();
        //eslint-disable-next-line
    },[])
    
  return (
    <div>
        <h1>This is About page of Daily notes </h1>
        <h2>My name : {a.state.name}  and i'm stuyding in : {a.state.class}</h2>
    </div>
  )
}

export default About
