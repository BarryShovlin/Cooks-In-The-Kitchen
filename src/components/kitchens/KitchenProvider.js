import { createContext } from "react"
import React, { useState, createContext } from "react"

export const KitchenContext = createContext()


export const getKitchens = () => {
    const [kitchens, setKitchens] = useSate([])
    return fetch("http://localhost:8088/kitchens?_embed=employees")
    .then(res => res.json())
    .then(setKitchens)
}