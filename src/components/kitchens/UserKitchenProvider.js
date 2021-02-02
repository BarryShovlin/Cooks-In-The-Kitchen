
import React, { createContext } from "react"
import { useState } from "react"

export const UserKitchenContext = createContext()

export const UserKitchenProvider = (props) => {

    const [userKitchens, setUserKitchen] = useState([])

    
    const getUserKitchenById = (id) => {
        return fetch(`http://localhost:8088/userKitchens/${id}`)
            .then(res => res.json())
    }

    const getUserKitchen = (userId) => {
        return fetch(`http://localhost:8088/userKitchens/${userId}`)
        .then(res => res.json())
        .then(setUserKitchen())
    }

    const deleteUserKitchen = userKitchenId => {
        return fetch(`http://localhost:8088/userKitchens/${userKitchenId}`, {
            method: "DELETE"
        })
        .then(getKitchens)
    }


    return (
        <UserKitchenContext.Provider value={{
            userKitchens, getUserKitchenById, getUserKitchen, deleteUserKitchen
        }}>
            {props.children}
        </UserKitchenContext.Provider>
    )
}