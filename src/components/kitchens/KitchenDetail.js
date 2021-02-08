import React, { useEffect, useState, useContext } from "react"
import { KitchenContext } from "./KitchenProvider"
import { UserKitchenContext } from "./UserKitchenProvider"
import "./Kitchen.css"
import { useHistory, useParams } from "react-router-dom"


 export const KitchenDetail = () => {
     const { kitchens, getKitchens, getKitchenById} = useContext(KitchenContext)
     const { userKitchens, getUserKithens, addUserKitchen } = useContext(UserKitchenContext)

    const {kitchenId} = useParams()
    const history = useHistory()

    const [kitchen, setKitchens] = useState({})
    const [userKitchen, setUserKitchen] = useState({
        kitchenId: parseInt(kitchenId),
        userId: parseInt(localStorage.getItem("kitchen_user"))
    })

  
    const handleClickAddKitchen = (event) => {
        event.preventDefault()
        
        addUserKitchen(userKitchen)
        .then(() => history.push("/userKitchens"))
        
    }

    useEffect(() => {
        getKitchenById(kitchenId)
        .then(setKitchens)
    }, [])


   
    return (
        <section className="kitchens">
            <h3 className="kitchen_name">{kitchen.name}</h3>
            <div className="kitchen_address">{kitchen.address}</div>
            <div className="kitchen_phone">{kitchen.phone}</div>
            <button onClick={handleClickAddKitchen}>
                Add to your kitchens
            </button>
        </section>
    )

}