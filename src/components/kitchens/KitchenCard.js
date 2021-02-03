import React, { useContext, useEffect } from "react";
import "./Kitchen.css";
import { Link, useHistory } from "react-router-dom"
import { KitchenContext } from "./KitchenProvider"
import { UserKitchenContext } from "./UserKitchenProvider"

export const KitchenCard = ({kitchen}) => {
    const { kitchens, getKitchens } = useContext(KitchenContext)
    const { addUserKitchen } = useContext(UserKitchenContext)
    const history = useHistory()

    useEffect(() => {
        getKitchens()
    }, [])

    const handleClickAddKitchen = (event) => {
        event.preventDefault()

     
        addUserKitchen(kitchens)
            .then(() => history.push("/userKitchens"))
    }
    return (
    <section className="kitchen">
        <h3 className="kitchen__name">
                { kitchen.name }
        </h3>
        <div className="kitchen__address">{kitchen.address}</div>
        <div className="kitchen__phone">phone:{kitchen.phone}</div>
        <button onClick={handleClickAddKitchen}>
                    Add To Your Kitchens
                </button>

    </section>
);
    }

