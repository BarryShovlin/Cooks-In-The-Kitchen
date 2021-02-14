import React from "react"
import { Link } from "react-router-dom"
import "./NavBar.css"
import { Logout } from "../auth/Logout"

export const NavBar = (props) => {
    return (
        <ul className="navbar">
            <li className="navbar__item active">
                <Link className="navbar__link" to="/">Cooks In The Kitchen</Link>
            </li>
            <li className="navbar__item">
                <Link className="navbar__link" to="/userKitchens">Your Kitchens</Link>
            </li>

            <li className="navbar__logout">
                <button onClick={Logout()}>Get Outta Here</button>
            </li>
        </ul>
    )
}