import React, { useContext } from "react";
import "./Kitchen.css";
import { useHistory } from "react-router-dom"
import { UserKitchenContext } from "./UserKitchenProvider"

export const UserKitchenCard = ({ userKitchen }) => {
    const { deleteUserKitchen } = useContext(UserKitchenContext)


    const history = useHistory()

    const handleDeleteUserKitchen = () => {
        deleteUserKitchen(userKitchen.id)
            .then(() => {
                history.push("/userKitchens")
            })
    }






    return (
        <section className="kitchen">
            <h3 className="kitchen__name">
                {userKitchen.kitchen.name}
            </h3>
            <div className="kitchen__address">{userKitchen.kitchen.address}</div>
            <div className="kitchen__phone">phone:{userKitchen.kitchen.phone}</div>
            <button onClick={() => history.push(`/userKitchen/detail/${userKitchen.kitchenId}`)}>Check out the recipes </button>
            <button onClick={() => history.push(`/employees/detail/${userKitchen.kitchenId}`)}>Team Info</button>
            <button onClick={handleDeleteUserKitchen}>Remove From Your Kitchens</button>


        </section>
    );
}


