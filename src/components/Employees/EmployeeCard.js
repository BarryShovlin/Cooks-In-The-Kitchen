import React, { useState, useContext, useEffect } from "react";
import "./Employee.css";
import { useHistory } from "react-router-dom"
import { EmployeeContext } from "./KitchenProvider"


export const EmployeeCard = ({employee}) => {
    const {employees, getEmployees, getEmployeesById} = useContext(EmployeeContext)


    const history = useHistory()

    return (
        <section className="employee">
            <h3 className="employee__name">
                    { employee.name }
            </h3>
           <div className="employee_name">Phone Number: {employee.phone}</div>
           <div className="employee_email">"Email Address: {employee.email}</div>
    
        </section>
    )
}