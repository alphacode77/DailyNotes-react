import React from "react"
import AddNote from "./Addnote"
import Notes from "./Notes"

const Home =()=>{

    return(
        <>
        <AddNote/>
<div className="container">
<Notes/>
</div>
        </>
    )
}

export default Home
