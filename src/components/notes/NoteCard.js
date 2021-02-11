import React, { useState, useContext, useEffect } from "react";
import "./Notes.css";
import { useHistory, useParams, Link } from "react-router-dom"
import { NoteContext } from "./NoteProvider"
import { RecipeContext } from "../recipes/RecipeProvider"


export const NoteCard = ({note}) => {

   console.log(note)
    return (
    <section className="note">
        <div className="note_text">{note.text}</div>

    </section>
);
    }