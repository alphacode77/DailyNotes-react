import React, { useState } from "react";
import NoteContext from "./NoteContext"


const NoteState = (props) => {
const host = "http://localhost:5000"
  const initalNotes = []
  const [notes, setNotes] = useState(initalNotes)

  //Fetch Notes on client side by api call
  const getNotes= async ()=>{
      //TODO API Calls
      const response = await fetch(`${host}/api/note/fetchallnotes/`, {
        method:"GET",
        header: {
          "Content-Type": "application/json",
          "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjNmMjBiOWEwMGFkNjIzYWQzZDRkYWUyIn0sImlhdCI6MTY3NjgwOTYzN30.algF1fHWYUCMZVsp3EHcaae440JganwKqyUh2Qaak60"
        },
        
      });
      const json= await response.json();
      console.log(json)
      setNotes(json) 
  }

  //Add Notes
  const addNote = async (title, description, tag) => {
    //TODO API Calls
    const response = await fetch(`${host}/api/note/addnote/`, {
      method:"POST",
      header: {
        "Content-Type": "application/json",
        "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjNmMjBiOWEwMGFkNjIzYWQzZDRkYWUyIn0sImlhdCI6MTY3NjgwOTYzN30.algF1fHWYUCMZVsp3EHcaae440JganwKqyUh2Qaak60"
      },
      body: JSON.stringify({title,description,tag})
    });
    const json=  await response.json();
//client side adding notes
    console.log("note added")
    let note = {
      "_id": "63f90022ae5c6479c6e95d43e",
      "user": "63f20b9a00ad623ad3d4dae2",
      "title": title,
      "description": description,
      "tag": tag,
      "date": "2023-02-24T18:21:30.036Z",
      "__v": 0
    }
    setNotes(notes.concat(note))
    
  }

  //Delete Notes
  const deleteNote = (id) => {
    //Todo API Calls
      console.log(id)
      const newNote = notes.filter((note)=>{return note._id!==id})
      setNotes(newNote)

  }

  //Update Notes
  const editNote =async (id,title,description,tag) => {
 
    const response = await fetch(`${host}/api/note/updatenote/${id}/`, {
      method:"PUT",
      header: {
        "Content-Type": "application/json",
        "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjNmMjBiOWEwMGFkNjIzYWQzZDRkYWUyIn0sImlhdCI6MTY3NjgwOTYzN30.algF1fHWYUCMZVsp3EHcaae440JganwKqyUh2Qaak60"
      },
      body: JSON.stringify({title,description,tag})
    });
    const json= await response.json();

    //Logic to edit in client

    for(let i=0; i<notes.length; i++){
      const element=notes[i];
      if(element._id===id){
        element.title=title;
        element.description=description;
        element.tag=tag;
      }
    }
   
  }


  return (
    <NoteContext.Provider value={{ notes, setNotes, addNote, deleteNote, editNote,getNotes}}>
      {props.children}
    </NoteContext.Provider>

  )
}

export default NoteState;