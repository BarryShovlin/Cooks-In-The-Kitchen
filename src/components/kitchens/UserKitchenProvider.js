
import React, { createContext } from "react"
import { useState } from "react"

export const UserKitchenContext = createContext()

export const UserKitchenProvider = (props) => {

    const [userKitchens, setUserKitchen] = useState([])

    
    const getUserKitchenById = (id) => {
        return fetch(`http://localhost:8088/userKitchens/${id}?_embed=kitchens`)
            .then(res => res.json())
    }

    const getUserKitchens = () => {
        return fetch("http://localhost:8088/userKitchens?_expand=kitchen&")
        .then(res => res.json())
        .then(setUserKitchen)
    }

    const deleteUserKitchen = userKitchenId => {
        return fetch(`http://localhost:8088/userKitchens/${userKitchenId}`, {
            method: "DELETE"
        })
        .then(getUserKitchens)
    }

    const addUserKitchen = userKitchenObj => {
        return fetch("http://localhost:8088/userKitchens", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(userKitchenObj)
        })
        .then(setUserKitchen)
        .then(getUserKitchens)
    }


    return (
        <UserKitchenContext.Provider value={{
            userKitchens, getUserKitchenById, getUserKitchens, deleteUserKitchen, addUserKitchen
        }}>
            {props.children}
        </UserKitchenContext.Provider>
    )
}