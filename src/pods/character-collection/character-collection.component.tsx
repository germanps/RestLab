import * as React from 'react'
import { CharacterEntityVm } from './character-collection.vm'
import { CharacterCard } from './components/character-card.component'
import * as classes from './character-collection.styles'

interface Props {
  characterCollection: CharacterEntityVm[]
  onCreateCharacter: () => void
  onDetail: (id: string) => void
  onEdit: (id: string) => void
  onDelete: (id: string) => void
}

export const CharacterCollectionComponent: React.FunctionComponent<Props> = (
  props
) => {
  const { characterCollection, onDetail, onEdit, onDelete } = props;

  return (
    <div className={classes.root}>
      <ul className={classes.list}>
        {characterCollection.map((character) => (
          <li key={character.id}>
            <CharacterCard character={character} onDetail={onDetail} onEdit={onEdit} onDelete={onDelete} />
          </li>
        ))}
      </ul>
    </div>
  )
}
