import React, { useContext, useEffect, useState } from "react"
import { RecipeContext } from "./RecipeProvider"
import "./Recipe.css"
import { useParams, useHistory } from "react-router-dom"

export const RecipeDetail = () => {
    const { getRecipeById } = useContext(RecipeContext)

    const [recipe, setRecipes] = useState({})

    const {recipeId} = useParams()

    const history = useHistory()

    useEffect(() => {
        getRecipeById(recipeId)
        .then((response) => {
            setRecipes(response)
        })
    }, [])

    return (
        <section className="recipe">
            <h3 className="recipe_name">{recipe.name}</h3>
            <div classname=""
        </section>
    )
}