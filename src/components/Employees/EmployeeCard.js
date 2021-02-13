import React, { useState, useContext, useEffect } from "react";
import "./Employee.css";
import { useHistory } from "react-router-dom"
import { UserKitchenContext } from "../kitchens/UserKitchenProvider"


export const EmployeeCard = ({ employee }) => {


    return (
        <section className="employee">
            <h3 className="employee__name">
                {employee.user.name}
            </h3>
            <div className="employee_position">{employee.position.title}</div>
            <div className="employee_name">Phone Number: {employee.user.phone}</div>
            <div className="employee_email">Email Address: {employee.user.email}</div>


        </section>
    )
}