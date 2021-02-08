import React, { useContext, useEffect, useState } from "react"
import { KitchenContext } from "../kitchens/KitchenProvider"
import { RecipeContext } from "./RecipeProvider"
import "./Recipe.css"
import { useHistory } from "react-router-dom"


export const RecipeForm = () => {
    const { addRecipe } = useContext(RecipeContext)
    const { kitchens, getKitchens } = useContext(KitchenContext)


    const [recipe, setRecipe] = useState({
        name: "",
        description: "",
        userId: 0,
        kitchenId: 0,
        price: ""
    })
}

const history = useHistory()

useEffect(() => {
    getRecipes()
    .then(getKitchens)
})

const handleInputChange = (event) => {
    const newRecipe = {...recipe }
    let selectedVal = event.target.value
    if (event.target.id.includes("Id")) {
        selectedVale = parseInt(selectedVal)
    }
    newRecipe[event.target.id] = selectedVal
    setRecipe(newRecipe)
}

const handleClickSaveRecipe = (event) => {
    event.preventDefault()

    const kitchenId = recipe.kitchenId

    if (kitchenId === 0) {
        window.alert("Please select a kitchen")
    } else {
        addRecipe(recipe)
        .then(() => history.push("/recipes"))
    }

    return (
        <form className="recipeForm">
            <h2 className="recipeForm_title"> New Recipe</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="name">Recipe name:</label>
                    <input type="text" id="name" onChange={handleInputChange} required autoFocus className="form-control" placeholder="Recipe name" value={recipe.name}/>
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="ingredients">Ingredients needed:</label>
                    <input type="text" id="ingredients" onChange={handleInputChange} required autoFocus className="form-control" placeholder="Ingredients" value={recipe.ingredients}/>
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="description">Instructions:</label>
                    <input type="text" id="description" onChange={handleInputChange} required autoFocus className="form-control" placeholer="Instructions" value={recipe.instructions}/>
                </div>
            </fieldset>
            <fieldset>
                <div className=""
            </fieldset>


        </form>
    )
}