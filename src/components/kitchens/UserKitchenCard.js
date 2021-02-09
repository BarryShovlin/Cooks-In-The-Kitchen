import React, { useState, useContext, useEffect } from "react";
import "./Kitchen.css";
import { useHistory, useParams, Link } from "react-router-dom"
import { KitchenContext } from "./KitchenProvider"
import { UserKitchenContext } from "./UserKitchenProvider"
import { RecipeContext } from "../recipes/RecipeProvider"

export const UserKitchenCard = ({ userKitchen }) => {
    const { kitchens, getKitchenById, getKitchens, addKitchen } = useContext(KitchenContext)
    const { addUserKitchen, getUserKitchens, getUserKitchenById } = useContext(UserKitchenContext)
    const { recipes, getRecipeById, getRecipes } = useContext(RecipeContext)

    const history = useHistory()

    const [recipe, setRecipe] = useState({})

    const userRecipeId = useParams()



    const handleClickRecipeView = (event) => {
        event.preventDefault()

        getRecipes()
            .then(() => history.push("/recipes/"))
    }



    return (
        <section className="kitchen">
            <h3 className="kitchen__name">
                {userKitchen.kitchen.name}
            </h3>
            <div className="kitchen__address">{userKitchen.kitchen.address}</div>
            <div className="kitchen__phone">address:{userKitchen.kitchen.phone}</div>
            <button onClick={handleClickRecipeView}>Check out the recipes </button>

        </section>
    );
}


