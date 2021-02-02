import React from "react"
import { Route } from "react-router-dom"
import { Home } from "./Home"
import { KitchenSelect } from "./kitchens/KitchenSelect"
import { KitchenProvider } from "./kitchens/KitchenProvider"
import { KitchenDetail } from "./kitchens/KitchenDetail"

export const ApplicationViews = () => {
    return (
        <>
            <Route path="/">
                <Home />
            </Route>

            <KitchenProvider>
                <Route exact path="/kitchens">
                    <KitchenSelect />
                </Route>
                <Route exact path="/kitchens/detail/:kitchenId(\d+)">
                    <KitchenDetail />
                </Route>
            </KitchenProvider>



        </>
    )
}