import React, { useEffect, useContext, useState } from "react"
import { useParams, Link } from "react-router-dom"
import {  RecipeContext } from "./RecipeProvider"
import { RecipeCard } from "./RecipeCard"
import { UserKitchenContext } from "../kitchens/UserKitchenProvider"
import { RecipeForm } from './RecipeForm'

export const RecipeList = () => {
    const { recipes, getRecipes } = useContext(RecipeContext)
    const { userKitchens, getUserKitchens, getUserKitchenById} = useContext(UserKitchenContext)
  const {userKitchenId} = useParams()
  const [userKitchen, setUserKitchen] = useState({})



    useEffect(() => {
      getUserKitchenById(userKitchenId)
      .then((response) => {
        setUserKitchen(response)
      })
      .then(getRecipes())
  
    }, []);

   
    const kitchenRessie = recipes.filter(recipe => recipe.kitchenId === userKitchen.kitchenId)
console.log(kitchenRessie)

      return (
        <>
        <h2>check Out The Recipes</h2>
        <div className="recipes">
        {
      kitchenRessie.map(recipe => {
        return <RecipeCard key={recipe.id} recipe={recipe} />
      })
    }
            </div>
            <button>
                <Link to={"/recipes/detail/addRecipe"}>
                    Add a new recipe
                </Link>
            </button>

    </>
      )
}