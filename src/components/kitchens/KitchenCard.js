import React, { useState, useContext, useEffect } from "react";
import "./Kitchen.css";
import { useHistory } from "react-router-dom"
import { KitchenContext } from "./KitchenProvider"
import { UserKitchenContext } from "./UserKitchenProvider"

export const KitchenCard = ({kitchen}) => {
    const { kitchens, getKitchenById, getKitchens, addKitchen } = useContext(KitchenContext)
    const { addUserKitchen, getUserKitchens } = useContext(UserKitchenContext)
    
  
    const history = useHistory()

  



    const handleClickDetails = (event) => {
        event.preventDefault()

            getKitchenById(kitchen)
            .then(() => history.push(`/kitchen/detail/${kitchen.id}`))
    }
    return (
    <section className="kitchen">
        <h3 className="kitchen__name">
                { kitchen.name }
        </h3>
        <button onClick={handleClickDetails}>
                    View Details
                </button>

    </section>
);
    }

