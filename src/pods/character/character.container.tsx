import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { linkRoutes } from 'core/router'
import * as api from './api'
import ArrowBack from '@mui/icons-material/ArrowBack'
import Button from '@mui/material/Button'
import { createEmptyCharacter, Character } from './character.vm'
import { mapCharacterFromApiToVm } from './character.mappers'
import { CharacterComponent } from './character.component'

export const CharacterContainer: React.FunctionComponent = () => {
  const [character, setCharacter] = React.useState<Character>(createEmptyCharacter())
  const { id } = useParams()
  const navigate = useNavigate()

  const handleLoadCharacter = async () => {
    try {
      const apiCharacter = await api.getCharacter(id)
      setCharacter(mapCharacterFromApiToVm(apiCharacter))
    } catch (error) {
      alert('Failed to load the character')
      navigate(linkRoutes.characterCollection)
    }
  }

  const handleBack = () => {
    navigate(linkRoutes.characterCollection)
  }

  React.useEffect(() => {
    if (id) {
      handleLoadCharacter()
    }
  }, [])

  return (
    <>
      <Button variant="contained" color="primary" onClick={handleBack}>
        Atrás
      </Button>
      <CharacterComponent character={character} />
    </>
  )
}
