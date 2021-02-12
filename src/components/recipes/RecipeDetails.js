import React, { useContext, useEffect, useState } from "react"
import { RecipeContext } from "./RecipeProvider"
import { UserKitchenContext } from "../kitchens/UserKitchenProvider"
import "./Recipe.css"
import { useParams, useHistory, Link } from "react-router-dom"
import { NoteContext } from "../notes/NoteProvider"
import { IngredientCard } from "../ingredients/IngredientCard"
import { IngredientList } from "../ingredients/IngredientList"
import { IngredientContext } from "../ingredients/IngredientProvider"
import { NoteForm } from "../notes/NoteForm"

export const RecipeDetail = () => {
    const { getRecipeById, deleteRecipe } = useContext(RecipeContext)
    const { userKitchens, getUserKitchens } = useContext(UserKitchenContext)
    const { ingredients, getIngredients } = useContext(IngredientContext)
    const { addNote } = useContext(NoteContext)

    const [ recipe, setRecipe ] = useState({})
    const [ingredient, setIngredient] = useState({})
    const [userKitchen, setUserKitchen] = useState({})
    const [ note ] = useState({}) 

    const history = useHistory()
    const {userKitchenId} = useParams()

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

const returnNoteForm = () => {
    const currentUser = parseInt(localStorage.getItem("kitchen_user"))
    if(currentUser === recipeId){
    return (
        <div className="noteForm">
        <NoteForm />
        </div>
    )}
}

    return (
        <section className="recipe">
            <h3 className="recipe_name">{recipe.name}</h3>
            <div className="recipe_description">{recipe.description}</div>
            <IngredientList />
            <div className="recipe_price">price: {recipe.price}</div>
            
            
            <button>
                <Link to={`/recipes/${recipeId}/addIngredient`}>Add Ingredients</Link>
            </button>
          
            <button onClick={handleDeleteRecipe}>Delete This Recipe</button>
            <button onClick={returnNoteForm}>Add a Note</button>
            
        </section>
    )
}