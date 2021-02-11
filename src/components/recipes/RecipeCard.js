import React, { useState, useContext, useEffect } from "react";
import "./Recipe.css";
import { useHistory, useParams, Link } from "react-router-dom"
import { RecipeContext } from "./RecipeProvider"


export const RecipeCard = ({recipe}) => {
    const { recipes, getRecipeById, getRecipes, addRecipe } = useContext(RecipeContext)

    const [setRecipes] = useState({})

    const {recipeId} = useParams()



    const history = useHistory()

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

