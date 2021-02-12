import React, { useContext, useEffect, useState } from "react"
import { NoteContext } from "./NoteProvider"
import { RecipeContext } from "../recipes/RecipeProvider"
import "./Notes.css"
import { useHistory, useParams } from "react-router-dom"
import { UserKitchenContext } from "../kitchens/UserKitchenProvider"



export const NoteForm = () => {
    const { addNote, getNotes} = useContext(NoteContext)
    const {recipes, getRecipes} = useContext(RecipeContext)



    const [userKitchen, setUserKitchen] = useState({})
    const [recipe, setRecipe] = useState([])
    const [note, setNotes] = useState({
        text: "",
        userId: parseInt(localStorage.getItem("kitchen_user")),
        recipeId: 0
    })

    const history = useHistory()

    useEffect(() => {
        getNotes()
        .then(getRecipes())
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
                .then(() => history.push((`/userKitchen/detail/${userKitchen.kitchenId}`)))
        }
    

    return (
        <form className="noteForm">
            <h2 className="noteForm_title"> Recipe Notes</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="text">Instructions:</label>
                    <input type="text" id="text" onChange={handleInputChange} required autoFocus className="form-control" placeholder="Write your note here" value={note.text} />
                </div>
            </fieldset>
            <fieldset>
              <div className="form-group">
                  <label htmlFor="note">Assign to a Recipe: </label>
                  <select defaultValue={recipe.id} name="recipeId" id="recipeId" onChange={handleInputChange} className="form-control" >
                      <option value="0">Select a recipe</option>
                      {recipes.map(r => (
                          <option key={r.id} value={r.id}>
                              {r.name}
                          </option>
                      ))}
                  </select>
              </div>
          </fieldset>
            <button onClick={handleClickSaveNote}>Save This Note</button>

            </form>

            )

}
