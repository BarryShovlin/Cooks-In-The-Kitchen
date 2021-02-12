import React, { useContext, useEffect, useState } from "react"
import { NoteContext } from "./NoteProvider"
import { RecipeContext } from "../recipes/RecipeProvider"
import "./Notes.css"
import { useHistory, useParams } from "react-router-dom"
import { KitchenContext } from "../kitchens/KitchenProvider"



export const NoteForm = () => {
    const { addNote, getNotes} = useContext(NoteContext)
    const {recipes, getRecipes} = useContext(RecipeContext)
    const {kitchens, getKitchens} = useContext(KitchenContext)

const {kitchenId} = useParams()
const {recipeId} = useParams()
    const [kitchen, setKitchen] = useState({})
    const [recipe, setRecipe] = useState([])
    const [note, setNotes] = useState({
        text: "",
        userId: parseInt(localStorage.getItem("kitchen_user")),
        recipeId: parseInt(recipeId)
    })

    const history = useHistory()

    useEffect(() => {
        getNotes()
        .then(getRecipes())
        .then(getKitchens)
    }, [])
    const handleInputChange = (event) => {
        const newNote = { ...note }
        let selectedVal = event.target.value
        if (event.target.id.includes("Id")) {
            selectedVal = parseInt(selectedVal)
        }
        newNote[event.target.id] = selectedVal
        setNotes(newNote)
    }

    const handleClickSaveNote = (event) => {
        event.preventDefault()
            addNote(note) 
                .then(() => history.push((`/recipes/detail/${recipeId}`)))
        }

    return (
        <form className="noteForm">
            <h2 className="noteForm_title"> Add a note</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="text">Recipe Notes</label>
                    <input type="text" id="text" onChange={handleInputChange} required autoFocus className="form-control" placeholder="Write your note here" value={note.text} />
                </div>
            </fieldset>
            <button onClick={handleClickSaveNote}>Save This Note</button>

            </form>

            )

}
