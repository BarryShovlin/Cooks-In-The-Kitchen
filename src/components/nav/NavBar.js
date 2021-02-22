import React from "react"
import { Link } from "react-router-dom"
import "./NavBar.css"
import { Logout } from "../auth/Logout"
import Button from "react-bootstrap/Button"
import Navbar from "react-bootstrap/Navbar"

export const NavBar = (props) => {
    return (
        <Navbar fill variant="pills" defaultActiveKey="/" className="nav">
        <ul className="navbar">
            <li className="navbar__item active">
               <Link className="navbar__link" to="/">Cooks In The Kitchen</Link> 
            </li>
            <li className="navbar__item">
                <Link className="navbar__link" to="/userKitchens">Your Kitchens</Link>
            </li>

            <li className="navbar__logout">
                <Button variant="white" size="sm" onClick={Logout()}>Sign Out</Button>
            </li>
        </ul>
        </Navbar>
    )
}