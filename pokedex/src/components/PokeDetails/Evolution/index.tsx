import React from 'react'
import { Link } from 'react-router-dom'

import Card from '../../Card'
import { EvolutionWrapper } from './styles'

const evolutions = [
  {
    name: 'Bulbasaur',
    id: 1,
    initial: true,
    min_level: null
  },
  {
    name: 'Ivysaur',
    id: 2,
    initial: false,
    min_level: 16
  },
  {
    name: 'Venusaur',
    id: 3,
    initial: false,
    min_level: 32
  }
]

const Evolution: React.FC = () => {
  return (
    <EvolutionWrapper as="section" className="wrapper">
      <h2>Evolution</h2>
      <div className="cards">
        {evolutions.map(item => (
          <Link to="/" key={item.id}>
            <Card>
              <img
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${item.id}.png`}
                alt={item.name}
              />
              <h3>{item.name}</h3>
              <p>{item.initial ? 'Initial' : `Min Level: ${item.min_level}`}</p>
            </Card>
          </Link>
        ))}
      </div>
    </EvolutionWrapper>
  )
}

export default Evolution
