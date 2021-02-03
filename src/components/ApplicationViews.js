import React from "react"
import { Route } from "react-router-dom"
import { Home } from "./Home"
import { KitchenSelect } from "./kitchens/KitchenSelect"
import { KitchenProvider } from "./kitchens/KitchenProvider"
import { KitchenDetail } from "./kitchens/KitchenDetail"
import { UserKitchenProvider } from "./kitchens/UserKitchenProvider"

export const ApplicationViews = () => {
    return (
        <>
            <UserKitchenProvider>
                <KitchenProvider>
                    <Route exact path="/">
                        <Home />
                    </Route>
                </KitchenProvider>
            </UserKitchenProvider>

            <UserKitchenProvider>
                <Route exact path="/userKitchens">
                    <KitchenDetail />
                </Route>

            </UserKitchenProvider>



        </>
    )
}