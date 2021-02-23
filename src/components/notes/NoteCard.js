import React, { useContext, useState } from "react";
import "./Notes.css";
import { NoteContext } from "./NoteProvider"
import Button from "react-bootstrap/Button"

export const NoteCard = ({ note }) => {
    const { deleteNote } = useContext(NoteContext)

    const currentUser = parseInt(localStorage.getItem("kitchen_user"))

    const handleDeleteNote = () => {

        if (currentUser === note.userId) {
            deleteNote(note.id)
        }
        else {
            window.alert("You do not have permission to delete another user's notes")
        }
    }

    if (currentUser === note.userId) {
        return (
            <section className="note">
                <div className="note_text">{note.text}</div>
                <div className="note_author"> - {note.user.name}</div>
                <Button className="del_btn" variant="light" size="sm" onClick={handleDeleteNote}>Delete Note</Button>

            </section>
        )
    } else {
        return (
            <section className="note">
                <div className="note_text">{note.text}</div>
                <div className="note_author"> - {note.user.name}</div>

            </section>
        )
    }
}