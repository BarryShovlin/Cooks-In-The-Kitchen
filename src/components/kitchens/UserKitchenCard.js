import React, { useState, useContext, useEffect } from "react";
import "./Kitchen.css";
import { useHistory, useParams, Link } from "react-router-dom"
import { KitchenContext } from "./KitchenProvider"
import { UserKitchenContext } from "./UserKitchenProvider"
import { RecipeContext } from "../recipes/RecipeProvider"

export const UserKitchenCard = ({ userKitchen }) => {
    const { kitchens, getKitchenById, getKitchens, addKitchen } = useContext(KitchenContext)
    const { addUserKitchen, getUserKitchens, getUserKitchenById } = useContext(UserKitchenContext)
    const { getRecipeById, getRecipes } = useContext(RecipeContext)

    const history = useHistory()

    const userRecipeId = useParams()



    const handleClickRecipeView = (event) => {
        event.preventDefault()


        getRecipeById(userRecipeId)
            .then(() => history.push(`/recipe/detail/${userKitchen.id}`))
    }



    return (
        <section className="kitchen">
            <h3 className="kitchen__name">
                {userKitchen.kitchen.name}
            </h3>
            <div className="kitchen__address">{userKitchen.kitchen.address}</div>
            <div className="kitchen__phone">address:{userKitchen.kitchen.phone}</div>
            <button onClick={handleClickRecipeView}>
                <Link className="UserKitchen_recipes" to="/recipes">Check out the recipes</Link>

            </button>

        </section>
    );
}


