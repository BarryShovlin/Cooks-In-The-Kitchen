
import React, { useEffect, useState, useContext } from "react"
import { KitchenContext } from "./KitchenProvider"
import { UserKitchenContext } from "./UserKitchenProvider"
import "./Kitchen.css"
import { useHistory, useParams, Link } from "react-router-dom"
import { KitchenDetail } from "./KitchenDetail"

 export const UserKitchenDetail = () => {
     const { kitchens, getKitchens, getKitchenById} = useContext(KitchenContext)
     const { userKitchens, getUserKitchens, getUserKitchenById} = useContext(UserKitchenContext)

    const history = useHistory()

    const [userKitchen, setUserKitchens] = useState({})
    const [kitchen] = useState({})
 

    useEffect(() => {
        getUserKitchens()
        .then(setUserKitchens)
    }, [])


    return (
        <section className="kitchens">
            <h3 className="kitchen_name">{kitchen.name}</h3>
            <div className="kitchen_address">{kitchen.address}</div>
            <div className="kitchen_phone">{kitchen.phone}</div>
            <li className="navbar__item">
                <Link className="navbar__link" to="/kitchenRecipes">Recipes</Link>
            </li>
        </section>
    )

}