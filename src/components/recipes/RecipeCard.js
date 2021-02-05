import React, { useState, useContext, useEffect } from "react";
import "./Recipe.css";
import { useHistory } from "react-router-dom"
import { RecipeContext } from "./RecipeProvider"


export const RecipeCard = ({recipe}) => {
    const { recipes, getRecipeById, getRecipes, addRecipe } = useContext(RecipeContext)

  
    const history = useHistory()

    // const userKitchen = {
    //     userId: parseInt(localStorage.getItem("kitchen_user")),
    //     kitchenId: kitchen.id
    // }



    // const handleClickAddKitchen = (event) => {
    //     event.preventDefault()

     
    //     addUserKitchen(userKitchen)
    //         .then(() => history.push(`/kitchen/detail/${kitchen.id}`))
    // }
    return (
    <section className="recipe">
        <h3 className="recipe__name">
                { recipe.name }
        </h3>
        <div className="recipe__address">{recipe.address}</div>
        <div className="recipe__phone">address:{recipe.address}</div>

    </section>
);
    }

