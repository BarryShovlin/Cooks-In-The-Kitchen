import React, { createContext, useState } from "react"


export const EmployeeContext = createContext()

export const EmployeeProvider = (props) => {
    const [employees, setEmployees] = useState([])
    
    const getEmployees = () => {
        return fetch("http://localhost:8088/employees?_embed=kitchens")
        .then(res => res.json())
        .then(setEmployees)
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