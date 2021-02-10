
import React, { useEffect, useState, useContext } from "react"
import { KitchenContext } from "./KitchenProvider"
import { UserKitchenContext } from "./UserKitchenProvider"
import "./Kitchen.css"
import { useHistory, useParams, Link } from "react-router-dom"
import { KitchenDetail } from "./KitchenDetail"

 export const UserKitchenDetail = () => {
     const { kitchens, getKitchens, getKitchenById} = useContext(KitchenContext)
     const { userKitchens, getUserKitchens, getUserKitchenById, deleteUserKitchen} = useContext(UserKitchenContext)

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
            <h3 className="kitchen__name">
                {kitchen.kitchen?.name}
            </h3>
            <div className="kitchen__address">{kitchen.kitchen?.address}</div>
            <div className="kitchen__phone">address:{kitchen.kitchen?.phone}</div>
            <button onClick={handleClickRecipeView}>
                <Link className="navbar__link" to="/kitchenRecipes">Check out the recipes</Link>

            </button>
        

        </section>
    )
}