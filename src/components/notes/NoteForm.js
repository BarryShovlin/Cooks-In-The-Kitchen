import React, { useContext, useEffect, useState } from "react"
import { NoteContext } from "./NoteProvider"
import { RecipeContext } from "../recipes/RecipeProvider"
import "./Notes.css"
import { useHistory, useParams } from "react-router-dom"
import { KitchenContext } from "../kitchens/KitchenProvider"
import Button from "react-bootstrap/Button"



export const NoteForm = () => {
    const { addNote, getNotes } = useContext(NoteContext)
    const { getRecipes } = useContext(RecipeContext)
    const { getKitchens } = useContext(KitchenContext)
    const { recipeId } = useParams()
    const initalNoteState = {
        text: "",
        userId: parseInt(localStorage.getItem("kitchen_user")),
        recipeId: parseInt(recipeId)
    }
   
    const [note, setNote] = useState(initalNoteState)

    const history = useHistory()

    useEffect(() => {
        getNotes()
            .then(getRecipes)
            .then(getKitchens)
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
        addNote(note)
            .then(() => setNote(initalNoteState))
    }

    return (
        <form className="noteForm">
            <h2 className="noteForm_title"> Add a note</h2>
            <fieldset>
                <div className="form-group">
                    <input type="text" id="text" onChange={handleInputChange} required autoFocus className="form-control" placeholder="Write your note here" value={note.text} />
                </div>
            </fieldset>
            <Button variant="secondary" onClick={handleClickSaveNote}>Save This Note</Button>

        </form>

    )

}
