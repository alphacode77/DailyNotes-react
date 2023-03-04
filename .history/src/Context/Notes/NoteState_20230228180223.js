import React, { useState } from "react";
import NoteContext from "./NoteContext"


const NoteState = (props) => {

  const initalNotes = [
    {
      "_id": "63f3b6c17c6863985aada677be",
      "user": "63f20b9a00ad623ad3d4dae2",
      "title": "This is my second title",
      "description": "Description of the second note",
      "tag": "demo check",
      "date": "2023-02-20T18:07:03.296Z",
      "__v": 0
    },
    {
      "_id": "63f3b892a233086ff244bcc267",
      "user": "63f20b9a00ad623ad3d4dae2",
      "title": "This is my second title",
      "description": "Description of the second note",
      "tag": "demo check",
      "date": "2023-02-20T18:14:42.184Z",
      "__v": 0
    },
    {
      "_id": "63f3b89ca324086ff244bcc26b",
      "user": "63f20b9a00ad623ad3d4dae2",
      "title": "This is my second title12",
      "description": "Description of the second note12",
      "tag": "demo check",
      "date": "2023-02-20T18:14:52.449Z",
      "__v": 0
    },
    {
      "_id": "63f49f588821556f0ed94969e",
      "user": "63f20b9a00ad623ad3d4dae2",
      "title": "This is my third title",
      "description": "Description of the third note",
      "tag": "personal",
      "date": "2023-02-21T10:39:20.800Z",
      "__v": 0
    }
  ]
  const [notes, setNotes] = useState(initalNotes)

  //Add Notes
  const addNote = (title, description, tag) => {
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
  const deleteNote = () => {

  }

  //Update Notes
  const updateNote = () => {

  }
  return (
    <NoteContext.Provider value={{ notes, setNotes, addNote, deleteNote, updateNote }}>
      {props.children}
    </NoteContext.Provider>

  )
}

export default NoteState;