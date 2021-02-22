import React, { useContext } from "react";
import "./Kitchen.css";
import { useHistory } from "react-router-dom"
import { KitchenContext } from "./KitchenProvider"
import Button from "react-bootstrap/Button"
import Card from "react-bootstrap/Card"
import CardGroup from "react-bootstrap/CardGroup"


export const KitchenCard = ({ kitchen }) => {
    const { getKitchenById } = useContext(KitchenContext)


    const history = useHistory()





    const handleClickDetails = (event) => {
        event.preventDefault()

        getKitchenById(kitchen)
            .then(() => history.push(`/kitchen/detail/${kitchen.id}`))
    }
    return (
    
        <section className="kitchen">
            <h3 className="kitchen__name">
                {kitchen.name}
            </h3>
            <Button className="button" variant="secondary" size="sm" onClick={handleClickDetails}>
                View Details
                </Button>
        </section>
        
    );
}

