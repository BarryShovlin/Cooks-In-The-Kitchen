import { createContext } from "react"
import React, { useState, createContext } from "react"

export const KitchenContext = createContext()

export const KitchenProvider = (props) => {

    const [kitchens, setKitchens] = useSate([])

    const getKitchens = () => {
        return fetch("http://localhost:8088/kitchens?_embed=employees")
            .then(res => res.json())
            .then(setKitchens)
    }

    const getKitchenById = (id) => {
        return fetch(`http://localhost:8088/kithens/${id}`)
            .then(res => res.json())
    }


    return (
        <KitchenContext.Provider value={{
            kitchens, getKitchens, getKitchenById
        }}>
            {props.children}
        </KitchenContext.Provider>
    )
}