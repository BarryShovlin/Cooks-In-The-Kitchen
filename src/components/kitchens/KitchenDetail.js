import React, { useEffect, useState, useContext } from "react"
import { UserKitchenContext } from "./UserKitchenProvider"
import "./Kitchen.css"
import { useHistory, useParams } from "react-router-dom"

 export const KitchenDetail = () => {
    const { getUserKitchens, deleteUserKitchen } = useContext(UserKitchenContext)

    const [userKitchen, setUserKitchen] = useState({})

    const {userKitchenId} = useParams()
    const history = useHistory()

    const handleDelete = () => {
        deleteUserKitchen(userKitchen.id)
        .then(() => {
            history.push("/userKitchens")
        })
    }

    useEffect(() => {
        console.log("useEffect", userKitchenId)
        getUserKitchens(userKitchenId)
        .then(setUserKitchen)
    }, [])
   
    return (
        <section className="userKitchen">
            <h3 className="userKitchen_name">{userKitchen.name}</h3>
            <div className="userKitchen_address">{userKitchen.address}</div>
            <div className="userKitchen_phone">{userKitchen.phone}</div>
            <button onClick={handleDelete}>Remove userKitchen</button>
        </section>
    )

}