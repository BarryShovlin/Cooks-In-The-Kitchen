import React from "react";
import "./Kitchen.css";
import { Link } from "react-router-dom"

export const KitchenCard = ({kitchen}) => (
    <section className="kitchen">
        <h3 className="kitchen__name">
            <Link to={`/kitchens/detail/${kitchen.id}`}>
                { kitchen.name }
            </Link>
        </h3>
        <div className="kitchen_address">
            { kitchen.address }
        </div>
    </section>
);

