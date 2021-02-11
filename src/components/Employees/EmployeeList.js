import React, { useEffect, useContext, useState } from "react"
import {  EmployeeContext } from "./EmployeeProvider"
import { EmployeeCard } from "./EmployeeCard"
import { KitchenContext, KitchenProvider } from "../kitchens/KitchenProvider"
import { useParams } from "react-router-dom"


export const EmployeeList = () => {
    const {employees, getEmployees} = useContext(EmployeeContext)
    const {kitchens, getKitchens, getKitchenById } = useContext(KitchenContext)

    const [employee, setEmployee] = useState({})
    const [kitchen, setKitchen] = useState({})
    

  
    useEffect(() => {
      getKitchens()
      .then(getEmployees());
  
    }, []);
  
      
    return (
        <>
        <h2>Your Team</h2>
        <div className="employees">
    {
     
      employees.map(e => {
         
        return <EmployeeCard key={e.id} employee={e} />

        
      })
      
      }
  
            </div>

    </>
      );
}