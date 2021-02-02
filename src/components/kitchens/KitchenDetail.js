import React, { useEffect, useState, useContext } from "react"
import { KitchenContext } from "./KitchenProvider"
import "./Kitchen.css"
import { useHistory, useParams } from "react-router-dom"

 export const KitchenDetail = () => {
    const { getKitchenById, deleteKitchen } = useContext(KitchenContext)

    const [kitchen, setKitchens] = useState({})

    const {kitchenId} = useParams()
    const history = useHistory()

    const handleDelete = () => {
        deleteKitchen(kitchen.id)
        .then(() => {
            history.push("/kitchens")
        })
    }

    useEffect(() => {
        console.log("useEffect", kitchenId)
        getKitchenById(kitchenId)
        .then((response) => {
            setKitchens(response)
        })
    }, [])
    console.log(kitchen)
    return (
        <section className="kitchen">
            <h3 className="kitchen_name">{kitchen.name}</h3>
            <div className="kitchen_address">{kitchen.address}</div>
            <div className="kitchen_phone">{kitchen.phone}</div>
            <button onClick={handleDelete}>Remove Kitchen</button>
        </section>
    )

}