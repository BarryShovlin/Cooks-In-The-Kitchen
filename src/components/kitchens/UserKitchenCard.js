import React, { useState, useContext, useEffect } from "react";
import "./Kitchen.css";
import { useHistory, useParams, Link } from "react-router-dom"
import { KitchenContext } from "./KitchenProvider"
import { UserKitchenContext } from "./UserKitchenProvider"

export const UserKitchenCard = ({ userKitchen }) => {
    const { kitchens, getKitchenById, getKitchens, addKitchen } = useContext(KitchenContext)
    const { addUserKitchen, getUserKitchens, getUserKitchenById } = useContext(UserKitchenContext)


    const history = useHistory()

    const userKitchenId = useParams()



    const handleClickRecipeView = (event) => {
        event.preventDefault()


        getKitchenById(userKitchenId)
            .then(() => history.push(`/kitchen/detail/${userKitchen.id}`))
    }

    console.log(userKitchen)


    return (
        <section className="kitchen">
            <h3 className="kitchen__name">
                {userKitchen.kitchen.name}
            </h3>
            <div className="kitchen__address">{userKitchen.kitchen.address}</div>
            <div className="kitchen__phone">address:{userKitchen.kitchen.phone}</div>
            <button onClick={handleClickRecipeView}>
                <Link className="navbar__link" to="/kitchenRecipes">Check out the recipes</Link>

            </button>

        </section>
    );
}


