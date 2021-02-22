import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom"
import { KitchenContext } from "../components/kitchens/KitchenProvider"
import { KitchenCard } from "../components/kitchens/KitchenCard"





export const Home = () => {
    const { kitchens, getKitchens } = useContext(KitchenContext)

    console.log(kitchens)

    useEffect(() => {
        getKitchens()
    }, [])


    return (
        <>
            <h1>Cooks In The Kitchen</h1>
            <h2 className="slogan">Keeping Consistency In The Kitchen</h2>
            <h3>View details to register and join a kitchen</h3>
            <div className="userKitchens" >
                
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