import React, { useEffect, useContext, useState } from "react"
import { useParams } from "react-router-dom"
import { IngredientContext } from "./IngredientProvider"
import { IngredientCard } from "./IngredientCard"
import { UserKitchenContext } from "../kitchens/UserKitchenProvider"

export const IngredientList = () => {
  const { ingredients, getIngredients } = useContext(IngredientContext)
  const { getUserKitchenById } = useContext(UserKitchenContext)

  const { userKitchenId } = useParams()
  const [userKitchen, setUserKitchen] = useState({})
  const [recipe] = useState({})

  const { recipeId } = useParams()


  useEffect(() => {
    getUserKitchenById(userKitchenId)
      .then((response) => {
        setUserKitchen(response)
      })
      .then(getIngredients)

  }, []);


  const recipeIngredients = ingredients.filter(i => i.recipeId === parseInt(recipeId))

  const currentRecipeNoteText = (note) => {
    if (note.recipeId === recipe.id) {
      return (
        `${note.text}`
      )
    }
  }
  return (
    <>
      <h3 className="ingredients">Ingredients:</h3>
      <div className="recipe_ingredients">
        {recipeIngredients.map(i => {
          return <IngredientCard key={i.id} ingredient={i} />
        })}
      </div>
      <div className="recipe_notes">{currentRecipeNoteText}</div>

    </>
  )
}