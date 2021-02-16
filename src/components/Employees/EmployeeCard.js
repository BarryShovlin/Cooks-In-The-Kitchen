import React from "react";
import "./Employee.css";


export const EmployeeCard = ({ employee }) => {


    return (
        <section className="employee">
            <h3 className="employee__name">
                {employee.user.name}
            </h3>
            <div className="employee_position">{employee.position}</div>
            <div className="employee_name">Phone Number: {employee.user.phone}</div>
            <div className="employee_email">Email Address: {employee.user.email}</div>


        </section>
    )
}