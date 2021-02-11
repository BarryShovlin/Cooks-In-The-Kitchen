import React, { useContext, useEffect, useState } from "react"
import { RecipeContext } from "./RecipeProvider"
import { UserKitchenContext } from "../kitchens/UserKitchenProvider"
import "./Recipe.css"
import { useParams, useHistory, Link } from "react-router-dom"
import { NoteContext } from "../notes/NoteProvider"
import { NoteCard } from "../notes/NoteCard"

export const RecipeDetail = () => {
    const { getRecipeById, deleteRecipe } = useContext(RecipeContext)
    const { userKitchens, getUserKitchens } = useContext(UserKitchenContext)
    const { addNote } = useContext(NoteContext)

    const [ recipe, setRecipe ] = useState({})
    const [userKitchen, setUserKitchen] = useState({})
    const [ note ] = useState({}) 

    const history = useHistory()

    const {recipeId} = useParams()

    useEffect(() => {
        getRecipeById(recipeId)
        .then((response) => {
            setRecipe(response)
        })
    }, [])
const handleDeleteRecipe = () => {
    const currentUser = parseInt(localStorage.getItem("kitchen_user"))
    const userRecipeId = recipe.userId
    if(currentUser === userRecipeId) {
        deleteRecipe(recipeId)
        .then(history.push(`/userKitchens`))
    }
    else{
        window.alert("You do not have permission to delete this recipe")
    }
}

const currentRecipeNoteText = (note) => {
    if(note.recipeId === recipe.id) {
        return (
             `${note.text}`
        )
    }
}


    return (
        <section className="recipe">
            <h3 className="recipe_name">{recipe.name}</h3>
            <div className="recipe_description">{recipe.description}</div>
            <div className="recipe_price">price: {recipe.price}</div>
            <div className="recipe_notes">{currentRecipeNoteText}</div>
            <button onClick={handleDeleteRecipe}>Delete This Recipe</button>
            <button>
            <Link to={"/recipes/detail/addNote"}>
                    Add a Note
                </Link>
            </button>
        </section>
    )
}