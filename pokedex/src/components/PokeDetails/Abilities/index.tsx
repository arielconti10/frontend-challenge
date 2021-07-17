import React from 'react'

import { AbilitiesWrapper } from './styles'

const abilities = [
  {
    name: 'Overgrow',
    info: 'When this Pokémon has 1/3 or less of its HP remaining, its grass-type moves inflict 1.5× as much regular damage.'
  },
  {
    name: 'Chlorophyll',
    info: "This Pokémon's Speed is doubled during strong sunlight. This bonus does not count as a stat modifier."
  }
]

const Abilities: React.FC = () => {
  return (
    <AbilitiesWrapper as="section" className="wrapper">
      <h2>Abilities</h2>
      {abilities.map(ability => (
        <article key={ability.name}>
          <h3>{ability.name}</h3>
          <p>{ability.info}</p>
        </article>
      ))}
    </AbilitiesWrapper>
  )
}

export default Abilities
