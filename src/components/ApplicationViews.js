import React from "react"
import { Route } from "react-router-dom"
import { Home } from "./Home"
import { KitchenProvider } from "./kitchens/KitchenProvider"
import { KitchenDetail } from "./kitchens/KitchenDetail"
import { UserKitchenProvider } from "./kitchens/UserKitchenProvider"
import { RecipeProvider } from "./recipes/RecipeProvider"
import { RecipeDetail } from "./recipes/RecipeDetails"
import { RecipeList } from "./recipes/RecipeList"
import { UserKitchenList } from "./kitchens/UserKitchenList"
import { RecipeForm } from "./recipes/RecipeForm"
import { EmployeeList } from "./Employees/EmployeeList"
import { NoteProvider } from "./notes/NoteProvider"
import { NoteForm } from "./notes/NoteForm"
import { NoteList } from "./notes/NoteList"
import { IngredientForm } from "./ingredients/IngredientForm"
import { IngredientProvider } from "./ingredients/IngredientProvider"

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
                        <NoteProvider>
                            <IngredientProvider>
                                <Route exact path="/kitchen/detail/:kitchenId(\d+)">
                                    <KitchenDetail />
                                </Route>
                                <Route exact path="/userKitchens">
                                    <UserKitchenList />
                                </Route>

                                <Route exact path="/userKitchen/detail/:kitchenId(\d+)">
                                    <RecipeList />
                                </Route>
                                <Route exact path="/recipes/detail/:recipeId(\d+)">
                                    <RecipeDetail />
                                    <NoteList />
                                    <NoteForm />
                                </Route>
                                <Route exact path="/recipes/detail/addRecipe/:kitchenId(\d+)">
                                    <RecipeForm />
                                </Route>
                                <Route exact path="/employees/detail/:kitchenId(\d+)">
                                    <EmployeeList />
                                </Route>
                                <Route exact path="/recipes/:recipeId(\d+)/addIngredient">
                                    <IngredientForm />
                                </Route>

                            </IngredientProvider>
                        </NoteProvider>
                    </RecipeProvider>
                </KitchenProvider>
            </UserKitchenProvider>






        </>
    )
}