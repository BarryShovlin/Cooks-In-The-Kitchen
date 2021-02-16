import React, { useState, useContext, useEffect } from "react";
import "./Recipe.css";
import { Link } from "react-router-dom"
import { RecipeContext } from "./RecipeProvider"


export const RecipeCard = ({recipe}) => {
    const {  getRecipes } = useContext(RecipeContext)

    const [setRecipes] = useState({})





    useEffect(() => {
        getRecipes()
        .then(setRecipes)
    }, [])

   
    return (
    <section className="recipe">
        <h3 className="recipe__name">
                { recipe.name }
        </h3>
        <div className="recipe__description">{recipe.description}</div>
        <button>
                <Link to={`/recipes/detail/${recipe.id}`}>
                    View Full Recipe
                </Link>
            </button>

    </section>
);
    }

