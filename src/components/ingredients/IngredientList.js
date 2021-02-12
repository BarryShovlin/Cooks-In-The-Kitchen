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
  const [ingredient, setIngredient] = useState({})
  const {recipeId} = useParams()


    useEffect(() => {
      getUserKitchenById(userKitchenId)
      .then((response) => {
        setUserKitchen(response)
      })
      .then(getIngredients)
  
    }, []);

   
    const recipeIngredients = ingredients.filter(i => i.recipeId === recipeId)

    const currentRecipeNoteText = (note) => {
        if(note.recipeId === recipe.id) {
            return (
                 `${note.text}`
            )
        }
    }
console.log(recipe)
console.log(recipeId)
      return (
        <>
        <div className="ingredients">Ingredients:</div>
        <div className="recipe_ingredients">
            { ingredients.map(i => {
              if(i.recipeId === recipeId) {
                return <IngredientCard key={i.id} ingredient={i} />
            }})}
            </div>
            <div className="recipe_notes">{currentRecipeNoteText}</div>
        
        <div className="recipes">
    
            </div>

    </>
      )
}