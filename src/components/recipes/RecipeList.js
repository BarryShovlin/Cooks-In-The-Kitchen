import React, { useEffect, useContext, useState } from "react"
import {  RecipeContext } from "./RecipeProvider"
import { RecipeCard } from "./RecipeCard"

export const RecipeList = () => {
    const {recipes, getRecipes} = useContext(RecipeContext)
   

    useEffect(() => {
      getRecipes()
  
    }, []);

      return (
        <>
        <h2>check Out The Recipes</h2>
        <div className="recipes">
        {
      recipes.map(recipe => {
        return <RecipeCard key={recipe.id} recipe={recipe} />
      })
    }
            </div>

    </>
      );
}