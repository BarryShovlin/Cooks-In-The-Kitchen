import React, { useContext, useEffect, useState } from "react"
import { RecipeContext } from "./RecipeProvider"
import "./Recipe.css"
import { useParams, useHistory, Link } from "react-router-dom"

export const RecipeDetail = () => {
    const { getRecipeById } = useContext(RecipeContext)

    const [ recipe, setRecipe ] = useState({})

 
    return (
        <section className="recipe">
            <h3 className="recipe_name">{recipe.name}</h3>
            <div classname="recipe_description">{recipe.description}</div>
            <div className="recipe_price">{recipe.price}</div>
        </section>
    )
}