import React from 'react'
import { Link } from 'react-router-dom'

import arrowIcon from '../../assets/images/arrowIcon.svg'
import Info from '../../components/PokeDetails/Info'
import Stats from '../../components/PokeDetails/Stats'
import Abilities from '../../components/PokeDetails/Abilities'
import Evolution from '../../components/PokeDetails/Evolution'
import Type from '../../components/PokeDetails/Type'
import { MainDetails } from './styles'

const POKEMON = {
  id: 1,
  name: 'Bulbasaur',
  type: ['Grass', 'Poison'],
  imageURL:
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png',
  color: 'Green',
  height: 7,
  weight: 69,
  capture_rate: 7,
  base_experience: 64,
  base_happiness: 70,
  stats: {
    hp: {
      base: 45,
      effort: 0
    },
    atk: {
      base: 49,
      effort: 0
    },
    def: {
      base: 49,
      effort: 0
    },
    special_atk: {
      base: 65,
      effort: 0
    },
    special_def: {
      base: 65,
      effort: 0
    },
    speed: {
      base: 45,
      effort: 0
    }
  }
}

const Details: React.FC = () => {
  return (
    <>
      <MainDetails as="main">
        <Link to="/">
          <img src={arrowIcon} alt="arrowIcon" />
        </Link>
        <section>
          <h1>
            #{POKEMON.id} {POKEMON.name}
          </h1>
          <img src={POKEMON.imageURL} alt="Bulbasaur art" />
          <Info
            color={POKEMON.color}
            base_experience={POKEMON.base_experience}
            base_happiness={POKEMON.base_happiness}
            capture_rate={POKEMON.capture_rate}
            height={POKEMON.height}
            weight={POKEMON.weight}
          />
          <Stats {...POKEMON.stats} />
        </section>
      </MainDetails>
      <Abilities />
      <Type />
      <Evolution />
    </>
  )
}

export default Details
