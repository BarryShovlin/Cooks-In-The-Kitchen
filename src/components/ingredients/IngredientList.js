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


    useEffect(() => {
      getUserKitchenById(userKitchenId)
      .then((response) => {
        setUserKitchen(response)
      })
      .then(getIngredients())
  
    }, []);

   
    const recipeIngredients = ingredients.filter(i => i.recipeId === recipe.id)

    const currentRecipeNoteText = (note) => {
        if(note.recipeId === recipe.id) {
            return (
                 `${note.text}`
            )
        }
    }

      return (
        <>
        <div className="recipe_ingredients">Ingredients:
            { ingredients.map(i => {
                return <IngredientCard key={i.id} ingredient={i} />
            })}
            </div>
            <div className="recipe_notes">{currentRecipeNoteText}</div>
        
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