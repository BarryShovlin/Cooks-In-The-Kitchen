import React, { useEffect, useContext, useState } from "react"
import {  UserKitchenContext } from "./UserKitchenProvider"
import { UserKitchenCard } from "./UserKitchenCard"
import { KitchenContext } from "./KitchenProvider"


export const UserKitchenList = () => {
    const {userKitchens, getUserKitchens} = useContext(UserKitchenContext)
    const { getKitchens } = useContext(KitchenContext)
  
    useEffect(() => {
      getKitchens()
      .then(getUserKitchens());
  
    }, []);

    const currentUser =  parseInt(localStorage.getItem("kitchen_user"))
    const currentUserKitchen = userKitchens.filter(kitch => kitch.userId === currentUser)
  
      return (
        <>
        <h2>Your Kitchens</h2>
        <div className="userkitchens">
    {
     
      currentUserKitchen.map(kitchen => {
        return <UserKitchenCard key={kitchen.id} userKitchen={kitchen} />
        
      })
      
      }
  
            </div>

    </>
      );
}