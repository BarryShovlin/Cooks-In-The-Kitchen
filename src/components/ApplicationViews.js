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
import { RecipeForm } from "./recipes/RecipeForm"

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
                    <RecipeProvider>
                        <Route exact path="/kitchen/detail/:kitchenId(\d+)">
                            <KitchenDetail />
                        </Route>
                        <Route exact path="/userKitchens">
                            <UserKitchenList />
                        </Route>

                        <Route exact path="/userKitchen/detail/:userKitchenId(\d+)">
                            <RecipeList />
                        </Route>
                        <Route exact path="/recipes/detail/:recipeId(\d+)">
                            <RecipeDetail />
                        </Route>
                        <Route exact path="/recipes/detail/addRecipe">
                            <RecipeForm />
                        </Route>
                    </RecipeProvider>
                </KitchenProvider>
            </UserKitchenProvider>






        </>
    )
}