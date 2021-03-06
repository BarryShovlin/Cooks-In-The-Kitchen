
import React, { useEffect, useState, useContext } from "react"
import { KitchenContext } from "./KitchenProvider"
import { UserKitchenContext } from "./UserKitchenProvider"
import "./Kitchen.css"
import { useHistory, useParams, Link } from "react-router-dom"

export const UserKitchenDetail = () => {
    const { getKitchenById } = useContext(KitchenContext)
    const { getUserKitchens } = useContext(UserKitchenContext)

    const history = useHistory()

    const [userKitchen, setUserKitchens] = useState({})
    const [kitchen] = useState({})

    const userKitchenId = useParams()



    const handleClickRecipeView = (event) => {
        event.preventDefault()


        getKitchenById(userKitchenId)
            .then(() => history.push(`/kitchen/detail/${userKitchen.id}`))
    }


    useEffect(() => {
        getUserKitchens()
            .then(setUserKitchens)
    }, [])


    return (
        <section className="kitchen">
            <h1 className="kitchen__name">
                {kitchen.kitchen?.name}
            </h1>
            <div className="kitchen__address">{kitchen.kitchen?.address}</div>
            <div className="kitchen__phone">address:{kitchen.kitchen?.phone}</div>
            <button onClick={handleClickRecipeView}>
                <Link className="navbar__link" to="/kitchenRecipes">Check out the recipes</Link>

            </button>


        </section>
    )
}