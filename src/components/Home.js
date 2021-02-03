import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom"
import { KitchenContext } from "../components/kitchens/KitchenProvider"
import { KitchenCard } from "../components/kitchens/KitchenCard"
import { UserKitchenContext } from "../components/kitchens/UserKitchenProvider"
import { useHistory } from "react-router-dom"

// import { PropsAndState } from './PropsAndState';



export const Home = () => {
    const { kitchens, getKitchens } = useContext(KitchenContext)
    const { addUserKitchen } = useContext(UserKitchenContext)
    const history = useHistory()

    useEffect(() => {
        getKitchens()
    }, [])

    const handleClickAddKitchen = (event) => {
        event.preventDefault()

        const kitchenId = parseInt(userKitchen.kitchenId)
        addUserKitchen(kitchens)
            .then(() => history.push("/userKitchens"))
    }

    return (
        <>
            <h1>Cooks In The Kitchen</h1>
            <small>Keeping Consistency In The Kitchen</small>
            <div>
                <Link classname="userKitchens" to="/userKitchens">Go to your kitchens</Link>
            </div>
            <div className="add_userKitchen">
                {
                    kitchens.map(kitchen => {
                        return <KitchenCard key={kitchen.id} kitchen={kitchen} />
                    })
                }
                <button onClick={handleClickAddKitchen}>
                    Add To Your Kitchens
                </button>
            </div>

        </>
    );
}