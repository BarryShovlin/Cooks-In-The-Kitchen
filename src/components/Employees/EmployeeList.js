import React, { useEffect, useContext } from "react"
import { UserKitchenContext } from "../kitchens/UserKitchenProvider"
import { EmployeeCard } from "./EmployeeCard"
import { useParams } from "react-router-dom"



export const EmployeeList = () => {
  const { userKitchens, getUserKitchens } = useContext(UserKitchenContext)
  const { kitchenId } = useParams()




  useEffect(() => {
    getUserKitchens()

  }, []);

  const employeeInfo = userKitchens?.filter(kitchen => kitchen.kitchenId === parseInt(kitchenId))

  return (
    <>
      <h2>Your Team</h2>
      <div className="employees">
        {

          employeeInfo?.map(e => {

            return <EmployeeCard key={e.id} employee={e} />


          })

        }

      </div>

    </>
  );
}