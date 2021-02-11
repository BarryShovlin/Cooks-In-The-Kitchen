import React from "react";
import "./Ingredients.css";



export const IngredientCard = ({ingredient}) => {
    return (
    <section className="ingredient">
        <div className="ingredient_text">{ingredient.name}</div>

    </section>
);
    }