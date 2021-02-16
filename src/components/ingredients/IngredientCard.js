import React, { useContext } from "react";
import "./Ingredients.css";
import { IngredientContext } from "./IngredientProvider"

export const IngredientCard = ({ingredient}) => {

const {deleteIngredient } = useContext(IngredientContext)



const handleDeleteIngredient = () => {
    deleteIngredient(ingredient.id)

}


    return (
    <section className="ingredient">
        <div className="ingredient_text">({ingredient.amount})   {ingredient.name} <button onClick={handleDeleteIngredient}>Remove Ingredient</button></div>
        
    </section>
);
    }