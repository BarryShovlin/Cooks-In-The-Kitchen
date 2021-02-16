import React, { useContext, useEffect, useState } from "react"
import { IngredientContext } from "./IngredientProvider"
import { RecipeContext } from "../recipes/RecipeProvider"
import "./Ingredients.css"
import { useHistory, useParams } from "react-router-dom"



export const IngredientForm = () => {
    const { addIngredient, getIngredients} = useContext(IngredientContext)
    const { getRecipes } = useContext(RecipeContext)
const {recipeId} = useParams()
    const [ingredient, setIngredients] = useState({
        name: "",
        amount: "",
        recipeId: parseInt(recipeId)
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
    
            addIngredient(ingredient) 
                .then(() => history.push((`/recipes/detail/${recipeId}`)))
        }
        return (
            <form className="ingredientForm">
            <h2 className="ingredientForm_title">Add Ingredient</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="text">Ingredient Name</label>
                    <input type="text" id="name" onChange={handleInputChange} required autoFocus className="form-control" placeholder="example: Clam Juice" value={ingredient.name} />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="amount">Amount:</label>
                    <input type="text" id="amount" onChange={handleInputChange} required autoFocus className="form-control" placeholder="example: 1cup" value={ingredient.amount} />
                </div>
            </fieldset>
          <button onClick={handleClickSaveIngredient}>Add To The Recipe</button>
            </form>
        )


    }