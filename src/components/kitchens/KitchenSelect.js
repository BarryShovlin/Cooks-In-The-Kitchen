import React, { useState, useContext } from "react"
import { getKitchens, KitchenContext } from "./KitchenProvider"
import { useHistory } from "react"
import { Link } from "react-router-dom"
import { KitchenCard } from "./KitchenCard"

export const KitchenSelect = () => {
    const {kitchens, getkitchens} = useContext(KitchenContext)
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