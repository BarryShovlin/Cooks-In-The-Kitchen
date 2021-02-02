import React, { createContext, useState } from "react"


export const RecipeContext = createContext()

export const RecipeProvider = (props) => {
    const [recipes, setRecipes] = useState([])
    
    const getRecipes = () => {
        return fetch("http://localhost:8088/recipes")
        .then(res => res.json())
        .then(setRecipes)
    }
    const getRecipeById = (id) => {
        return fetch(`http://localhost:8088/recipes/${id}?expand=ekitchens`)
        .then(res => res.json())
    }

    return (
        <RecipeContext.Provider value={{
            recipes, getRecipes, getRecipeById
        }}>
        {props.children}
        </RecipeContext.Provider>
    )

}