import React, { useEffect, useContext, useState } from "react"
import { useParams, Link } from "react-router-dom"
import {  RecipeContext } from "./RecipeProvider"
import { RecipeCard } from "./RecipeCard"
import { KitchenContext } from "../kitchens/KitchenProvider"

export const RecipeList = () => {
    const { recipes, getRecipes } = useContext(RecipeContext)
    const { getKitchenById } = useContext(KitchenContext)
  const {kitchenId} = useParams()
  const [kitchen, setKitchen] = useState({})



    useEffect(() => {
      getKitchenById(kitchenId)
      .then(setKitchen)
      .then(getRecipes)
  
    }, []);

    const kitchenRessie = recipes.filter(recipe => recipe.kitchenId === parseInt(kitchenId))


      return (
        <>
        <h2>{kitchen.name} Recipes</h2>
        <div className="recipes">
        {
      kitchenRessie.map(recipe => {
        return <RecipeCard key={recipe.id} recipe={recipe} />
      })
    }
            </div>
            
            <button>
                <Link to={`/recipes/detail/addRecipe/${kitchenId}`}>
                    Add a new recipe
                </Link>
            </button>
            

    </>
      )
}