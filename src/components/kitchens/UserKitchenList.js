import React, { useEffect, useContext, useState } from "react"
import {  UserKitchenContext } from "./UserKitchenProvider"
import { UserKitchenCard } from "./UserKitchenCard"
import { KitchenContext, KitchenProvider } from "./KitchenProvider"
import { KitchenCard } from "./KitchenCard"

export const UserKitchenList = () => {
    const {userKitchens, getUserKitchens, getUserKitchenById} = useContext(UserKitchenContext)
    const {kitchens, getKitchens} = useContext(KitchenContext)
  
    useEffect(() => {
      getKitchens()
      .then(getUserKitchens());
  
    }, []);

      return (
        <>
        <h2>Your Kitchens</h2>
        <div className="userkitchens">
        {

      userKitchens.map(kitchen => {
        if (kitchen.userId === localStorage.getItem("kitchen_user")) {
        return <UserKitchenCard key={kitchen.id} kitchen={kitchen} />
      }})
    }
  
            </div>

    </>
      );
}