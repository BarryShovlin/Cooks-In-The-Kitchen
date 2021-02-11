import React, { useContext, useEffect, useState } from "react"
import { KitchenContext } from "../kitchens/KitchenProvider"
import { UserKitchenContext } from "../kitchens/UserKitchenProvider"
import { RecipeContext } from "./RecipeProvider"
import "./Recipe.css"
import { useHistory, useParams } from "react-router-dom"



export const RecipeForm = () => {
    const { addRecipe, getRecipes } = useContext(RecipeContext)
    const { kitchens, getKitchens } = useContext(KitchenContext)
    const { userKitchens, getUserKitchenById } = useContext(UserKitchenContext)

    const [userKitchen, setUserKitchen] = useState({})

    const {userKitchenId} = useParams()

const [kitchen, setKitchen] = useState([])
    const [recipe, setRecipe] = useState({
        name: "",
        description: "",
        userId: 0,
        kitchenId: 0,
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

    const kitchenId = recipe.kitchenId

    if (kitchenId === 0) {
        window.alert("Please select a kitchen")
    } else {
        addRecipe(recipe)
            .then(() => history.push((`/userKitchens`)))
    }
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
                    <label htmlFor="ingredients">Ingredients needed:</label>
                    <input type="text" id="ingredients" onChange={handleInputChange} required autoFocus className="form-control" placeholder="Ingredients" value={recipe.ingredients} />
                </div>
            </fieldset>
            <fieldset>
              <div className="form-group">
                  <label htmlFor="kitchen">Assign to Kitchen: </label>
                  <select defaultValue={kitchen.id} name="kitchenId" id="kitchenId" onChange={handleInputChange} className="form-control" >
                      <option value="0">Select a kitchen</option>
                      {kitchens.map(k => (
                          <option key={k.id} value={k.id}>
                              {k.name}
                          </option>
                      ))}
                  </select>
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
