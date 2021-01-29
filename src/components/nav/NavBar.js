import React from "react"
import { Link } from "react-router-dom"
import "./NavBar.css"

export const NavBar = (props) => {
    return (
        <ul className="navbar">
            <li className="navbar__item active">
                <Link className="navbar__link" to="/">Cooks In The Kitchen</Link>
            </li>
            <li className="navbar__item">
                <Link className="navbar__link" to="/kitchens">Kitchens</Link>
            </li>
            <li className="navbar__item">
                <Link className="navbar__link" to="/recipes">Recipes</Link>
            </li>
            <li className="navbar__item">
                <Link className="navbar__link" to="/team_info">Team Info</Link>
            </li>
        </ul>
    )
}