import React, { useState, useContext, useEffect } from "react";
import "./Kitchen.css";
import { useHistory } from "react-router-dom"
import { KitchenContext } from "./KitchenProvider"
import { UserKitchenContext } from "./UserKitchenProvider"

export const KitchenCard = ({kitchen}) => {
    const { kitchens, getKitchensById, getKitchens, addKitchen } = useContext(KitchenContext)
    const { addUserKitchen, getUserKitchens } = useContext(UserKitchenContext)

  
    const history = useHistory()

    const userKitchen = {
        userId: parseInt(localStorage.getItem("kitchen_user")),
        kitchenId: kitchen.id
    }



    const handleClickAddKitchen = (event) => {
        event.preventDefault()

     
        addUserKitchen(userKitchen)
            .then(() => history.push(`/kitchen/detail/${kitchen.id}`))
    }
    return (
    <section className="kitchen">
        <h3 className="kitchen__name">
                { kitchen.name }
        </h3>
        <div className="kitchen__address">{kitchen.address}</div>
        <div className="kitchen__phone">address:{kitchen.address}</div>
        <button onClick={handleClickAddKitchen}>
                    Add To Your Kitchens
                </button>

    </section>
);
    }

