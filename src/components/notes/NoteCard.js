import React, { useState, useContext, useEffect } from "react";
import "./Notes.css";
import { useHistory, useParams, Link } from "react-router-dom"
import { NoteContext } from "./NoteProvider"


export const NoteCard = ({note}) => {
    const { notes, getNoteById, getNotes, addNote, deleteNote } = useContext(NoteContext)


    const [note, setNotes] = useState({})


    useEffect(() => {
        getNotes()
        .then(setNotes)
    }, [])

   
    return (
    <section className="note">
        <h3 className="note__name">
                { note.recipe?.name }
        </h3>
        <div className="note_text">{note.text}</div>

    </section>
);
    }