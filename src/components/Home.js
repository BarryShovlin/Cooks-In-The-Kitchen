import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom"
import { KitchenContext } from "../components/kitchens/KitchenProvider"
import { KitchenCard } from "../components/kitchens/KitchenCard"
import Card from "react-bootstrap/Card"
import Image from "react-bootstrap/Image"





export const Home = () => {
    const { kitchens, getKitchens } = useContext(KitchenContext)

    console.log(kitchens)

    useEffect(() => {
        getKitchens()
    }, [])


    return (
        <>
            <h1>Cooks In The Kitchen</h1>
            <small className="slogan">Keeping Consistency In The Kitchen</small>
            <div>
                <Link className="userKitchens" to="/userKitchens">Go to your kitchens</Link>
            </div>
            <div className="add_userKitchen">
                {
                    kitchens.map(kitchen => {
                        return <KitchenCard key={kitchen.id} kitchen={kitchen} />
                    })
                }
            </div>
           
        </>
    );
}