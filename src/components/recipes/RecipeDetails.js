import React, { useContext, useEffect, useState } from "react"
import { RecipeContext } from "./RecipeProvider"
import "./Recipe.css"
import { useParams, useHistory, Link } from "react-router-dom"
import { IngredientList } from "../ingredients/IngredientList"

export const RecipeDetail = () => {
    const { getRecipeById, deleteRecipe } = useContext(RecipeContext)


    const [ recipe, setRecipe ] = useState({})


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


    const currentUser = parseInt(localStorage.getItem("kitchen_user"))



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
            
        </section>
    )
}