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
    const userId = recipe.userId

    if (kitchenId === 0) {
        window.alert("Please select a kitchen")
    } else {
        addRecipe(recipe)
        .then(() => history.push("/recipes"))
    }
}