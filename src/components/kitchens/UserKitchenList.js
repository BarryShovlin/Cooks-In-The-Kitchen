import React, { useEffect, useContext } from "react"
import {  UserKitchenContext } from "./UserKitchenProvider"
import { userKitchenCard } from "./UserKitchenCard"

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
        return <userKitchenCard key={kitchen.id} kitchen={kitchen} />
      })
    }
            </div>

    </>
      );
}