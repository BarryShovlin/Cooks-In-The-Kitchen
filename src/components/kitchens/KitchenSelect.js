import React, { useEffect, useContext } from "react"
import {  KitchenContext } from "./KitchenProvider"
import { KitchenCard } from "./KitchenCard"

export const KitchenSelect = () => {
    const {kitchens, getKitchens} = useContext(KitchenContext)
 

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