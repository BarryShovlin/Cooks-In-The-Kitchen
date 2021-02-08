import React, { useState, useContext, useEffect } from "react";
import "./Kitchen.css";
import { useHistory, useParams } from "react-router-dom"
import { KitchenContext } from "./KitchenProvider"
import { UserKitchenContext } from "./UserKitchenProvider"

export const UserKitchenCard = ({kitchen}) => {
    const { kitchens, getKitchenById, getKitchens, addKitchen } = useContext(KitchenContext)
    const { addUserKitchen, getUserKitchens, getUserKitchenById } = useContext(UserKitchenContext)

  
    const history = useHistory()

    const userKitchenId = useParams()



    const handleClickRecipeView = (event) => {
        event.preventDefault()

     
        getKitchenById(userKitchenId)
            .then(() => history.push(`/kitchen/detail/${kitchen.id}`))
    }
    return (
    <section className="kitchen">
        <h3 className="kitchen__name">
                { kitchen.name }
        </h3>
        <div className="kitchen__address">{kitchen.address}</div>
        <div className="kitchen__phone">address:{kitchen.address}</div>
        <button onClick={handleClickRecipeView}>
                    Check out the recipes
                </button>

    </section>
);
    }

