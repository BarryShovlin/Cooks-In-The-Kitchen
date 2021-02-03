import React, { useEffect, useContext } from "react"
import {  KitchenContext } from "./KitchenProvider"
import { useHistory } from "react"
import { Link } from "react-router-dom"
import { KitchenCard } from "./KitchenCard"

export const KitchenSelect = () => {
    const {kitchens, getKitchens} = useContext(KitchenContext)
    const history = useHistory()
 

    useEffect(() => {
        getKitchens();
    
      }, []);

      return (
        <>
        <h2>Choose Your Kitchen</h2>
        <div className="kitchens">
        {
      kitchens.map(kitchen => {
        return <KitchenCard key={kitchen.id} kitchen={kitchen} />
      })
    }
            </div>

    </>
      );
}