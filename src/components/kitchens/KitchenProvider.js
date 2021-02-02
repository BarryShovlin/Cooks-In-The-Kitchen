
import React, { createContext } from "react"
import { useState } from "react"

export const KitchenContext = createContext()

export const KitchenProvider = (props) => {

    const [kitchens, setKitchens] = useState([])

    const getKitchens = () => {
        return fetch("http://localhost:8088/kitchens?_embed=employees")
            .then(res => res.json())
            .then(setKitchens)
    }

    const getKitchenById = (id) => {
        return fetch(`http://localhost:8088/kitchens/${id}`)
            .then(res => res.json())
    }

    const getUserKitchen = (userId) => {
        return fetch(`http://localhost:8088/userKitchens/${userId}`)
        .then(res => res.json())
    }

    const deleteKitchen = userKitchenId => {
        return fetch(`http://localhost:8088/userKitchens/${userKitchenId}`, {
            method: "DELETE"
        })
        .then(getKitchens)
    }


    return (
        <KitchenContext.Provider value={{
            kitchens, getKitchens, getKitchenById, getUserKitchen, deleteKitchen
        }}>
            {props.children}
        </KitchenContext.Provider>
    )
}