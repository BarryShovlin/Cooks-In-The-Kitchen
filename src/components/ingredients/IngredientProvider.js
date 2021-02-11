import React, { createContext, useState } from "react"


export const IngredientContext = createContext()

export const IngredientProvider = (props) => {
    const [ingredients, setIngredients] = useState([])
    
    const getIngredients = () => {
        return fetch("http://localhost:8088/ingredients?_expand=recipe")
        .then(res => res.json())
        .then(setIngredients)
    }
    const getIngredientyId = (id) => {
        return fetch(`http://localhost:8088/ingredients/${id}?_embed=kitchen`)
        .then(res => res.json())
    }

    const addIngredient = (ingredientObj) => {
        return fetch("http://localhost:8088/ingredients", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(ingredientObj)
        })
        .then(getIngredients)
    }

    const deleteIngredient = ingredientId => {
        return fetch(`http://localhost:8088/ingredients/${ingredientId}`, {
            method: "DELETE",
        })
        .then(getNotes)
    }

    return (
        <NoteContext.Provider value={{
            ingredients, getIngredients, getIngredientById, addIngredient, deleteIngredient
        }}>
        {props.children}
        </NoteContext.Provider>
    )

}