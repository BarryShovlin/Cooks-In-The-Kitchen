import React, { useEffect, useContext, useState } from "react"
import {  RecipeContext } from "./RecipeProvider"
import { RecipeCard } from "./RecipeCard"
import { UserKitchenContext } from "../kitchens/UserKitchenProvider"

export const RecipeList = () => {
    const { recipes, getRecipes } = useContext(RecipeContext)
    const { userKitchens, getUserKitchens} = useContext(UserKitchenContext)

const [userKitchen, setUserKitchen] = useState({})


    useEffect(() => {
      getUserKitchens()
      .then(getRecipes())
  
    }, []);

    const currentUser =  parseInt(localStorage.getItem("kitchen_user"))
    const currentUserKitchen = userKitchens.filter(kitch => kitch.userId === currentUser)
    const currentKitchenRecipes = recipes.filter(reci => reci.kitchenId === currentUserKitchen)

    console.log(currentKitchenRecipes)
      return (
        <>
        <h2>check Out The Recipes</h2>
        <div className="recipes">
        {
      currentKitchenRecipes.map(recipe => {
        return <RecipeCard key={recipe.id} recipe={recipe} />
      })
    }
            </div>

    </>
      )
}