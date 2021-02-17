import React, { useEffect, useContext, useState } from "react"
import { useParams } from "react-router-dom"
import { NoteContext } from "./NoteProvider"
import { NoteCard } from "./NoteCard"
import { UserKitchenContext } from "../kitchens/UserKitchenProvider"

export const NoteList = () => {
  const { notes, getNotes } = useContext(NoteContext)
  const { getUserKitchenById } = useContext(UserKitchenContext)
  const { userKitchenId } = useParams()
  const [userKitchen, setUserKitchen] = useState({})
  const { recipeId } = useParams()


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