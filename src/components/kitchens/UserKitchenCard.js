import React, { useContext } from "react";
import "./Kitchen.css";
import { useHistory } from "react-router-dom"
import { UserKitchenContext } from "./UserKitchenProvider"
import Button from "react-bootstrap/Button"

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
        <section className="your_kitchen">
            <h3 className="kitchen__name">
                {userKitchen.kitchen.name}
            </h3>
            <div className="kitchen__address">{userKitchen.kitchen.address}</div>
            <div className="kitchen__phone">phone:{userKitchen.kitchen.phone}</div>
            
            <Button className="det_button" variant="secondary" onClick={() => history.push(`/userKitchen/detail/${userKitchen.kitchenId}`)}>Check out the recipes </Button>
            <Button className="det_button" variant="secondary" onClick={() => history.push(`/employees/detail/${userKitchen.kitchenId}`)}>Team Info</Button>
            <Button className="det_button" variant="secondary" onClick={handleDeleteUserKitchen}>Remove From Your Kitchens</Button>
            

        </section>
    );
}


