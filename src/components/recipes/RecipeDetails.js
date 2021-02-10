import React, { useContext, useEffect, useState } from "react"
import { RecipeContext } from "./RecipeProvider"
import "./Recipe.css"
import { useParams, useHistory, Link } from "react-router-dom"

export const RecipeDetail = () => {
    const { getRecipeById } = useContext(RecipeContext)

    const [ recipe, setRecipe ] = useState({})

    const {recipeId} = useParams()

    useEffect(() => {
        getRecipeById(recipeId)
        .then((response) => {
            setRecipe(response)
        })
    }, [])

    return (
        <section className="recipe">
            <h3 className="recipe_name">{recipe.name}</h3>
            <div classname="recipe_description">{recipe.description}</div>
            <div className="recipe_price">price: {recipe.price}</div>
            <div className="recipe_notes">Instructions: {recipe.note}</div>
        </section>
    )
}