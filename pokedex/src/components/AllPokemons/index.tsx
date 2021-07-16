import React from 'react'
import { Link } from 'react-router-dom'

import PokeTypeBadge from '../PokeTypeBadge'
import { Wrapper, PokeCard } from './styles'

const DUMMY_POKEMON = [
  {
    name: 'Bulbasaur',
    type: ['Grass', 'Poison'],
    imageURL:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png'
  },
  {
    name: 'Bulbasaur',
    type: ['Grass', 'Poison'],
    imageURL:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png'
  },
  {
    name: 'Charmander',
    type: ['Fire'],
    imageURL:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png'
  },
  {
    name: 'Charmander',
    type: ['Fire'],
    imageURL:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png'
  },
  {
    name: 'Bulbasaur',
    type: ['Grass', 'Poison'],
    imageURL:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png'
  },
  {
    name: 'Bulbasaur',
    type: ['Grass', 'Poison'],
    imageURL:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png'
  },
  {
    name: 'Charmander',
    type: ['Fire'],
    imageURL:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png'
  },
  {
    name: 'Charmander',
    type: ['Fire'],
    imageURL:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png'
  }
]

const AllPokemons: React.FC = () => {
  return (
    <Wrapper>
      {DUMMY_POKEMON.map(pokemon => (
        <Link to="/">
          <PokeCard>
            <img src={pokemon.imageURL} alt={pokemon.name} />
            <span>{pokemon.name}</span>
            <div className="badges">
              {pokemon.type.map(type => (
                <PokeTypeBadge className={type.toLowerCase()}>
                  {type}
                </PokeTypeBadge>
              ))}
            </div>
          </PokeCard>
        </Link>
      ))}
    </Wrapper>
  )
}

export default AllPokemons
