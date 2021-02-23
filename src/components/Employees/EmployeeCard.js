import React from "react";
import "./Employee.css";


export const EmployeeCard = ({ employee }) => {


    return (
        <section className="employee">
            <h3 className="employee__name">
                {employee.user?.name}
            </h3>
            <h4 className="employee_position">{employee.position}</h4>
            <div className="employee_email">Email Address: {employee.user?.email}</div>


        </section>
    )
}