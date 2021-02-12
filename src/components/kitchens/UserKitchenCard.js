import React, { useState, useContext, useEffect } from "react";
import "./Kitchen.css";
import { useHistory, useParams, Link } from "react-router-dom"
import { UserKitchenContext } from "./UserKitchenProvider"
import { RecipeContext } from "../recipes/RecipeProvider"
import { EmployeeContext } from "../Employees/EmployeeProvider"

export const UserKitchenCard = ({ userKitchen }) => {
    const {  deleteUserKitchen } = useContext(UserKitchenContext)
    const { getRecipes } = useContext(RecipeContext)
    const { employees, getEmployees} = useContext(EmployeeContext)

    const history = useHistory()

    const handleDeleteUserKitchen = () => {
        deleteUserKitchen(userKitchen.id)
        .then(() => {
            history.push("/userKitchens")
        })
    }


    const handleClickEmployeeInfo = (event) => {
        event.preventDefault()
        
        getEmployees()
            .then(() => history.push(`employees/detail/${userKitchen.kitchenId}`) )
    }



    return (
        <section className="kitchen">
            <h3 className="kitchen__name">
                {userKitchen.kitchen.name}
            </h3>
            <div className="kitchen__address">{userKitchen.kitchen.address}</div>
            <div className="kitchen__phone">phone:{userKitchen.kitchen.phone}</div>
            <button onClick={() => history.push(`/userKitchen/detail/${userKitchen.kitchenId}`)}>Check out the recipes </button>
            <button onClick={handleClickEmployeeInfo}>Team Info</button>
            <button onClick={handleDeleteUserKitchen}>Remove From Your Kitchens</button>
            

        </section>
    );
}


