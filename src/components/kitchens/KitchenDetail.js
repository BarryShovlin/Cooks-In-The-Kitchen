import React, { useEffect, useState, useContext } from "react"
import { KitchenContext } from "./KitchenProvider"
import { UserKitchenContext } from "./UserKitchenProvider"
import "./Kitchen.css"
import { useHistory, useParams } from "react-router-dom"
import Button from "react-bootstrap/Button"


export const KitchenDetail = () => {
    const { getKitchenById } = useContext(KitchenContext)
    const { addUserKitchen } = useContext(UserKitchenContext)

    const { kitchenId } = useParams()
    const history = useHistory()

    const [kitchen, setKitchens] = useState({})
    const [userKitchen, setUserKitchen] = useState({
        kitchenId: parseInt(kitchenId),
        userId: parseInt(localStorage.getItem("kitchen_user")),
        position: ""
    })
    const position = userKitchen.position

    const handleClickAddKitchen = (event) => {
        event.preventDefault()
        if (position !== "") {

            addUserKitchen(userKitchen)
                .then(() => history.push("/userKitchens"))
        } else {
            window.alert("please include your position")
        }

    }


    const handleInputChange = (event) => {
        const newUserKitchen = { ...userKitchen }
        let selectedVal = event.target.value
        if (event.target.id.includes("Id")) {
            selectedVal = parseInt(selectedVal)
        }
        newUserKitchen[event.target.id] = selectedVal
        setUserKitchen(newUserKitchen)
    }

    useEffect(() => {
        getKitchenById(kitchenId)
            .then(setKitchens)
    }, [])



    return (
        <form className="add_userKitchen">
            <section className="kitchens">
                <h3 className="kitchen_name">{kitchen.name}</h3>
                <div className="kitchen_address">{kitchen.address}</div>
                <div className="kitchen_phone">{kitchen.phone}</div>
                <fieldset>
                    <div className="form-group">
                        <label htmlFor="position">Your Position</label>
                        <input type="text" id="position" onChange={handleInputChange} required autoFocus className="form-control" placeholder="example: Line Cook" value={userKitchen.position} />
                    </div>
                </fieldset>
                <Button variant="secondary" size="sm" onClick={handleClickAddKitchen}>
                    Add to your kitchens
            </Button>
            </section>
        </form>
    )

}