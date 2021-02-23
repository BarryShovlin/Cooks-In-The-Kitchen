import React, { useState, useContext, useEffect } from "react";
import "./Recipe.css";
import { Link } from "react-router-dom"
import { RecipeContext } from "./RecipeProvider"
import Button from "react-bootstrap/Button"


export const RecipeCard = ({ recipe }) => {
    const { getRecipes } = useContext(RecipeContext)

    const [setRecipes] = useState({})





    useEffect(() => {
        getRecipes()
            .then(setRecipes)
    }, [])


    return (
        <section className="recipe">
            <h3 className="recipe__name">
                {recipe.name}
            </h3>
            <div className="recipe__creator">recipe by: {recipe.user?.name}</div>
            <div className="recipe__description">{recipe.description}</div>
            <Button className="btn" variant="secondary" size="sm">
                <Link className="recipeView" to={`/recipes/detail/${recipe.id}`}>
                    View Full Recipe
                </Link>
            </Button>

        </section>
    );
}

