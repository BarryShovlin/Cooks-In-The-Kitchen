import React from "react";
import "./Notes.css";



export const NoteCard = ({note}) => {

    return (
    <section className="note">
        <div className="note_text">{note.text}</div>

    </section>
);
    }