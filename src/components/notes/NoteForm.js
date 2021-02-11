import React, { useContext, useEffect, useState } from "react"
import { NoteContext } from "./NoteProvider"
import { RecipeContext } from "./RecipeProvider"
import "./Recipe.css"
import { useHistory, useParams } from "react-router-dom"



export const NoteForm = () => {
    const { addNote, getNotes} = useContext(NoteContext)

    const [note, setNotes] = useState({
        text: "",
        userId: 0,
        recipeId: 0
    })

    const history = useHistory()

    useEffect(() => {
        getNotes()
            .then(setNotes)
    }, [])

    const handleInputChange = (event) => {
        const newNote = { ...note }
        let selectedVal = event.target.value
        if (event.target.id.includes("Id")) {
            selectedVal = parseInt(selectedVal)
        }
        newNote[event.target.id] = selectedVal
        setNote(newNote)
    }

    const handleClickSaveNote = (event) => {
        event.preventDefault()
    
        const RecipeId = note.RecipeId
    
        if (RecipeId === 0) {
            window.alert("Please select a recipe")
        } else {
            addNote(note)
                .then(() => history.push((`/notes`)))
        }
    }

}
