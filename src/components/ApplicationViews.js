import React from "react"
import { Route } from "react-router-dom"
import { Home } from "./Home"
import { KitchenSelect } from "./kitchens/KitchenSelect"
import { KitchenProvider } from "./kitchens/KitchenProvider"
import { KitchenDetail } from "./kitchens/KitchenDetail"
import { UserKitchenProvider } from "./kitchens/UserKitchenProvider"
import { RecipeProvider } from "./recipes/RecipeProvider"
import { RecipeDetail } from "./recipes/RecipeDetails"

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
                <KitchenProvider>
                    <Route exact path="/kitchen/detail/:kitchenId(\d+)">
                        <KitchenDetail />
                    </Route>
                </KitchenProvider>
            </UserKitchenProvider>

            <RecipeProvider>
                <Route exact path="/recipes/detail/:recipeId(/d+)">
                    <RecipeDetail />
                </Route>
            </RecipeProvider>



        </>
    )
}