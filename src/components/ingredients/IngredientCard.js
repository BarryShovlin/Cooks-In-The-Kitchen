import React, { useContext } from "react";
import "./Ingredients.css";
import { IngredientContext } from "./IngredientProvider"

export const IngredientCard = ({ingredient}) => {

const {  deleteIngredient } = useContext(IngredientContext)

const currentUser = parseInt(localStorage.getItem("kitchen_user"))
const userIngredient = ingredient.recipe.userId


const handleDeleteIngredient = () => {
    
    if(currentUser === userIngredient){
    deleteIngredient(ingredient.id)
    }
    else {
        window.alert("You do not have permission to adjust this recipe")
    }
}

if(currentUser === userIngredient){
    return (
    <section className="ingredient">
        <div className="ingredient_text">({ingredient.amount})   {ingredient.name} <button onClick={handleDeleteIngredient}>Remove Ingredient</button></div>
        
    </section>
)
    } else {
        return (
            <section className="ingredient">
                <div className="ingredient_text">({ingredient.amount})   {ingredient.name}</div>
                
            </section>
        )
    }
    }