import React, { useEffect, useContext, useState } from "react"
import { useParams, Link } from "react-router-dom"
import {  NoteContext } from "./NoteProvider"
import { NoteCard } from "./NoteCard"
import { UserKitchenContext } from "../kitchens/UserKitchenProvider"
import { RecipeContext } from '../recipes/RecipeProvider'

export const NoteList = () => {
    const { notes, getNotes } = useContext(NoteContext)
    const { recipes, getRecipes} = useContext(RecipeContext)
    const { userKitchens, getUserKitchens, getUserKitchenById} = useContext(UserKitchenContext)
  const {userKitchenId} = useParams()
  const [userKitchen, setUserKitchen] = useState({})
  const [recipe, setRecipes] = useState({})
  const {recipeId} = useParams()


    useEffect(() => {
      getUserKitchenById(userKitchenId)
      .then((response) => {
        setUserKitchen(response)
      })
      .then(getNotes())
  
    }, []);

   
    const recipeNotes = notes.filter(n => n.recipeId === parseInt(recipeId))


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