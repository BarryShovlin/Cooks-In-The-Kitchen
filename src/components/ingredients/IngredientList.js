import React, { useEffect, useContext, useState } from "react"
import { useParams, Link } from "react-router-dom"
import {  IngredientContext } from "./IngredientProvider"
import { IngredientCard } from "./IngredientCard"
import { UserKitchenContext } from "../kitchens/UserKitchenProvider"
import { RecipeContext } from '../recipes/RecipeProvider'

export const IngredientList = () => {
    const { ingredients, getIngredients } = useContext(IngredientContext)
    const { userKitchens, getUserKitchens, getUserKitchenById} = useContext(UserKitchenContext)
    const { recipes, getRecipes } = useContext(RecipeContext)
  const {userKitchenId} = useParams()
  const [userKitchen, setUserKitchen] = useState({})
  const [recipe, setRecipe] = useState({})

console.log(userKitchenId)

    useEffect(() => {
      getUserKitchenById(userKitchenId)
      .then((response) => {
        setUserKitchen(response)
      })
      .then(getIngredients())
  
    }, []);

   
    const recipeIngredients = ingredients.filter(i => i.recipeId === recipe.id)



      return (
        <>
        <div className="ingredients">Ingredients:</div>
        <div className="recipes">
        {
      recipeIngredients.map(ingredient => {
        return <IngredientCard key={ingredient.id} note={ingredient} />
      })
    }
            </div>

    </>
      )
}