import React, { useContext } from "react";
import "./Kitchen.css";
import { useHistory } from "react-router-dom"
import { KitchenContext } from "./KitchenProvider"
import Button from "react-bootstrap/Button"
import Card from "react-bootstrap/Card"

export const KitchenCard = ({ kitchen }) => {
    const { getKitchenById } = useContext(KitchenContext)


    const history = useHistory()





    const handleClickDetails = (event) => {
        event.preventDefault()

        getKitchenById(kitchen)
            .then(() => history.push(`/kitchen/detail/${kitchen.id}`))
    }
    return (
        <Card className="customCard" bg="purple" style={{ width: '18rem' }}>
        <section className="kitchen">
            <h3 className="kitchen__name">
                {kitchen.name}
            </h3>
            <Button className="button" variant="warning" size="sm" onClick={handleClickDetails}>
                View Details
                </Button>

        </section>
        </Card>
    );
}

