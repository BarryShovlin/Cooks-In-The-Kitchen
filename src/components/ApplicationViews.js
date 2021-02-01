import React from "react"
import { Route } from "react-router-dom"
import { Home } from "./Home"
import { KitchenSelect } from "./kitchens/KitchenSelect"
import { KitchenProvider } from  "./kitchens/KitchenProvider"
import { RecipeProvider } from "./recipes/RecipeProvider"
import { RecipeDetail } from "./recipes/RecipeDetails"

export const ApplicationViews = () => {
    return (
        <>
        <Route path="/">
            <Home />
        </Route>

        <KitchenProvider>
            <RecipeProvider>
            <Route path="/kitchens">
                <KitchenSelect />
            </Route>
            <Route path="/recipes">
                <RecipeDetail />
            </Route>
            </RecipeProvider>
        </KitchenProvider>

        </>
    )
}