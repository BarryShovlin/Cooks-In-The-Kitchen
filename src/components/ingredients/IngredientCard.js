import React, { useContext, useState } from "react";
import "./Ingredients.css";
import { IngredientContext } from "./IngredientProvider"
import { IngredientList } from "./IngredientList";

export const IngredientCard = ({ingredient}) => {

const {ingredients, deleteIngredient } = useContext(IngredientContext)
const [ingredienty, setIngredients] = useState({})


const handleDeleteIngredient = () => {
    deleteIngredient(ingredient.id)

}


    return (
    <section className="ingredient">
        <div className="ingredient_text">({ingredient.amount})   {ingredient.name} <button onClick={handleDeleteIngredient}>Remove Ingredient</button></div>
        
    </section>
);
    }