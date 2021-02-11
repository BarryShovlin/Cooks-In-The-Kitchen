import React, { useContext, useEffect, useState } from "react"
import { IngredientContext } from "./IngredientProvider"
import { RecipeContext } from "../recipes/RecipeProvider"
import "./Ingredients.css"
import { useHistory, useParams } from "react-router-dom"



export const IngredientForm = () => {
    const { addIngredient, getIngredients} = useContext(IngredientContext)
    const {recipes, getRecipes} = useContext(RecipeContext)

    const [recipe, setRecipe] = useState([])
    const [ingredient, setIngredients] = useState({
        name: "",
        recipeId: 0
    })

    const history = useHistory()

    useEffect(() => {
        getIngredients()
        .then(getRecipes())
    }, [])

    const handleInputChange = (event) => {
        const newIngredient = { ...ingredient }
        let selectedVal = event.target.value
        if (event.target.id.includes("Id")) {
            selectedVal = parseInt(selectedVal)
        }
        newIngredient[event.target.id] = selectedVal
        setIngredients(newIngredient)
    }

    const handleClickSaveIngredient = (event) => {
        event.preventDefault()
    
            addNote(note) 
                .then(() => history.push((`/userKitchens`)))
        }

        
    }