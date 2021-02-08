
import React, { useEffect, useState, useContext } from "react"
import { KitchenContext } from "./KitchenProvider"
import { UserKitchenContext } from "./UserKitchenProvider"
import "./Kitchen.css"
import { useHistory, useParams, Link } from "react-router-dom"

 export const UserKitchenDetail = () => {
     const { kitchens, getKitchens, getKitchenById} = useContext(KitchenContext)
     const { userKitchens, getUserKitchens, getUserKitchenById} = useContext(UserKitchenContext)

    const history = useHistory()

    const [userKitchen, setUserKitchens] = useState({})
 

    useEffect(() => {
        getUserKitchens()
        .then(setUserKitchens)
    }, [])


    return (
        <section className="kitchens">
            <h3 className="kitchen_name">{userKitchen.name}</h3>
            <div className="kitchen_address">{userKitchen.address}</div>
            <div className="kitchen_phone">{userKitchen.phone}</div>
            <li className="navbar__item">
                <Link className="navbar__link" to="/kitchenRecipes">Recipes</Link>
            </li>
        </section>
    )

}