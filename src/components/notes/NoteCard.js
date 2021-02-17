import React, { useContext, useState } from "react";
import "./Notes.css";
import { useParams } from "react-router-dom"
import { NoteContext } from "./NoteProvider"
import { RecipeContext } from "../recipes/RecipeProvider"


export const NoteCard = ({note}) => {
const { notes, deleteNote, getNotes } = useContext(NoteContext)
const { recipes, getRecipes } = useContext(RecipeContext)
const [notee, setNotes] = useState({})
const [recipe, setRecipe] = useState({})
const {noteId} = useParams()
const currentUser = parseInt(localStorage.getItem("kitchen_user"))
const handleDeleteNote = () => {
    
    if(currentUser === note.userId) {
        deleteNote(note.id)
    }
    else{
        window.alert("You do not have permission to delete another user's notes")
    }
}


    return (
    <section className="note">
        <div className="note_text">{note.text}</div>
        <div className="note_author"> - {note.user.name}</div>
        <button onClick={handleDeleteNote}>Delete Note</button>

    </section>
);
    }