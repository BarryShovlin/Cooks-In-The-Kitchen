import React from "react"
import { Route } from "react-router-dom"
import { Home } from "./Home"
import { KitchenSelect } from "./kitchens/KitchenSelect"
import { KitchenProvider } from  "./kitchens/KitchenProvider"

export const ApplicationViews = () => {
    return (
        <>
        <Route path="/">
            <Home />
        </Route>

        <KitchenProvider>
            <Route path="kitchens">
                <KitchenSelect />
            </Route>
        </KitchenProvider>

        </>
    )
}