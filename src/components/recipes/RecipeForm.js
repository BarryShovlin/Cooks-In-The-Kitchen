import React, { useContext, useEffect, useState } from "react"
import { KitchenContext } from "../kitchens/KitchenProvider"
import { RecipeContext } from "./RecipeProvider"
import "./Recipe.css"
import { useHistory, useParams } from "react-router-dom"



export const RecipeForm = () => {
    const { addRecipe, getRecipes } = useContext(RecipeContext)
    const { getKitchens } = useContext(KitchenContext)


    const { kitchenId } = useParams()

    const [recipe, setRecipe] = useState({
        name: "",
        description: "",
        userId: parseInt(localStorage.getItem("kitchen_user")),
        kitchenId: parseInt(kitchenId),
        price: ""
    })

    const history = useHistory()

    useEffect(() => {
        getRecipes()
            .then(getKitchens)
    }, [])

    const handleInputChange = (event) => {
        const newRecipe = { ...recipe }
        let selectedVal = event.target.value
        if (event.target.id.includes("Id")) {
            selectedVal = parseInt(selectedVal)
        }
        newRecipe[event.target.id] = selectedVal
        setRecipe(newRecipe)
    }



    const handleClickSaveRecipe = (event) => {
        event.preventDefault()

        addRecipe(recipe)
            .then(() => history.push(`/userKitchen/detail/${kitchenId}`))
    }

    return (
        <form className="recipeForm">
            <h2 className="recipeForm_title"> New Recipe</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="name">Recipe name:</label>
                    <input type="text" id="name" onChange={handleInputChange} required autoFocus className="form-control" placeholder="Recipe name" value={recipe.name} />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="description">Description:</label>
                    <input type="text" id="description" onChange={handleInputChange} required autoFocus className="form-control" placeholer="Instructions" value={recipe.description} />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="price">Price:</label>
                    <input type="text" id="price" onChange={handleInputChange} require autoFocus className="form-control" placeholder="Price" value={recipe.price} />
                </div>
            </fieldset>
            <button onClick={handleClickSaveRecipe}>Save This Recipe</button>


        </form>
    )

}
