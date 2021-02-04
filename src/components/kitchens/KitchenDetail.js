import React, { useEffect, useState, useContext } from "react"
import { UserKitchenContext } from "./UserKitchenProvider"
import { KitchenContext } from "./KitchenProvider"
import "./Kitchen.css"
import { useHistory, useParams } from "react-router-dom"

 export const KitchenDetail = () => {
     const { kitchens, getKitchens, getKitchenById} = useContext(KitchenContext)
    const { getUserKitchens, getUserKitchenById, deleteUserKitchen } = useContext(UserKitchenContext)

    const [kitchen, setKitchen] = useState({})

    const {kitchenId} = useParams()
    const history = useHistory()

 

    useEffect(() => {
        getKitchenById(kitchenId)
        .then(setKitchen)
    }, [])


    useEffect(() => {
        console.log("useEffect", kitchen)
    }, [kitchen])
   
    return (
        <section className="kitchens">
            <h3 className="kitchen_name">{kitchen.name}</h3>
            <div className="kitchen_address">{kitchen.address}</div>
            <div className="kitchen_phone">{kitchen.phone}</div>
        </section>
    )

}