import React, { createContext, useState } from "react"


export const EmployeeContext = createContext()

export const EmployeeProvider = (props) => {
    const [employees, setEmployees] = useState([])
    
    const getEmployees = () => {
        return fetch("http://localhost:8088/employees")
        .then(res => res.json())
        .then(setemployees)
    }
    const getEmployeeById = (id) => {
        return fetch(`http://localhost:8088/employees/${id}?_embed=kitchen`)
        .then(res => res.json())
    }

    return (
        <EmployeeContext.Provider value={{
            employees, getEmployeeById, getEmployees
        }}>
            {props.children}
        </EmployeeContext.Provider>
    )
}