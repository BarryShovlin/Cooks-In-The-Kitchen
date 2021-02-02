import React, { useEffect, useState, useContext } from "react"
import { KitchenContext } from "./KitchenProvider"
import "./Kitchen.css"
import { useHistory, useParams } from "react-router-dom"

const KitchenDetail = () => {
    const { getKitchenById } = useContext(KitchenContext)

    const [kitchen, setKitchens] = useState({})

    const kitchenId = useParams

    const handleDelete = () => {
        
    }

}