import React from "react"
import { Route } from "react-router-dom"
import { Home } from "./Home"
import { KitchenSelect } from "./kitchens/KitchenSelect"
import { KitchenProvider } from "./kitchens/KitchenProvider"
import { KitchenDetail } from "./kitchens/KitchenDetail"
import { UserKitchenProvider } from "./kitchens/UserKitchenProvider"
import { UserKitchenDetail } from "./kitchens/UserKitchenDetail"
import { RecipeProvider } from "./recipes/RecipeProvider"
import { RecipeDetail } from "./recipes/RecipeDetails"
import { RecipeList } from "./recipes/RecipeList"
import { UserKitchenList } from "./kitchens/UserKitchenList"

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
                        <UserKitchenDetail />
                    </Route>
                    <Route exact path="/userKitchens">
                        <UserKitchenList />
                    </Route>
                </KitchenProvider>
            </UserKitchenProvider>

            <RecipeProvider>
                <Route exact path="/recipes">
                    <RecipeList />
                </Route>
            </RecipeProvider>

            


        </>
    )
}