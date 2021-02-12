import React, { useEffect, useContext, useState } from "react"
import { useParams, Link } from "react-router-dom"
import {  NoteContext } from "./NoteProvider"
import { NoteCard } from "./NoteCard"
import { UserKitchenContext } from "../kitchens/UserKitchenProvider"
import { RecipeForm } from '../recipes/RecipeForm'

export const NoteList = () => {
    const { notes, getNotes } = useContext(NoteContext)
    const { userKitchens, getUserKitchens, getUserKitchenById} = useContext(UserKitchenContext)
  const {userKitchenId} = useParams()
  const [userKitchen, setUserKitchen] = useState({})


    useEffect(() => {
      getUserKitchenById(userKitchenId)
      .then((response) => {
        setUserKitchen(response)
      })
      .then(getNotes())
  
    }, []);

   
    const recipeNotes = notes.filter(n => n.kitchenId === userKitchen.kitchenId)



      return (
        <>
        <h3>Notes For This Recipe</h3>
        <div className="recipes">
        {
      recipeNotes.map(note => {
        return <NoteCard key={note.id} note={note} />
      })
    }
            </div>

    </>
      )
}