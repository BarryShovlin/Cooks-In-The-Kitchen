import React, { createContext, useState } from "react"


export const RecipeContext = createContext()

export const RecipeProvider = (props) => {
    const [recipes, setRecipes] = useState([])
    
    const getRecipes = () => {
        return fetch("http://localhost:8088/recipes?_embed=ingredients&_expand=user")
        .then(res => res.json())
        .then(setRecipes)
    }
    const getRecipeById = (id) => {
        return fetch(`http://localhost:8088/recipes/${id}?_expand=kitchen&_expand=user`)
        .then(res => res.json())
    }

    const addRecipe = (recipeObj) => {
        return fetch("http://localhost:8088/recipes", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(recipeObj)
        })
        .then(getRecipes)
    }

    const deleteRecipe = recipeId => {
        return fetch(`http://localhost:8088/recipes/${recipeId}`, {
            method: "DELETE",
        })
        .then(getRecipes)
    }
    return (
        <RecipeContext.Provider value={{
            recipes, getRecipes, getRecipeById, addRecipe, deleteRecipe
        }}>
        {props.children}
        </RecipeContext.Provider>
    )

}