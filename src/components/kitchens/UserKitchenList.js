import React, { useEffect, useContext } from "react"
import {  UserKitchenContext } from "./UserKitchenProvider"
import { KitchenCard } from "./KitchenCard"

export const UserKitchenList = () => {
    const {userKitchens, getUserKitchens} = useContext(UserKitchenContext)
 

    useEffect(() => {
      getUserKitchens();
  
    }, []);

      return (
        <>
        <h2>Your Kitchens</h2>
        <div className="userkitchens">
        {
      userKitchens.map(kitchen => {
        return <KitchenCard key={kitchen.id} kitchen={kitchen} />
      })
    }
            </div>

    </>
      );
}