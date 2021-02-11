import React, { createContext, useState } from "react"


export const NoteContext = createContext()

export const NoteProvider = (props) => {
    const [notes, setNotes] = useState([])
    
    const getNotes = () => {
        return fetch("http://localhost:8088/notes?_expand=recipe")
        .then(res => res.json())
        .then(setNotes)
    }
    const getNoteById = (id) => {
        return fetch(`http://localhost:8088/notes/${id}?_embed=kitchen`)
        .then(res => res.json())
    }

    const addNote = (noteObj) => {
        return fetch("http://localhost:8088/notes", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(noteObj)
        })
        .then(getNotes)
    }

    const deleteNote = noteId => {
        return fetch(`http://localhost:8088/notes/${noteId}`, {
            method: "DELETE",
        })
        .then(getNotes)
    }

    return (
        <NoteContext.Provider value={{
            notes, getNotes, getNoteById, addNote, deleteNote
        }}>
        {props.children}
        </NoteContext.Provider>
    )

}