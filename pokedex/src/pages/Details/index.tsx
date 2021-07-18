import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router'

import pokeContext, { PokeHomeInfo } from '../../store/pokeContext'
import parseFetchedPokemon from '../../helpers/parseFetchedPokemon'
import arrowIcon from '../../assets/images/arrowIcon.svg'
import Info from '../../components/PokeDetails/Info'
import Stats from '../../components/PokeDetails/Stats'
import Abilities from '../../components/PokeDetails/Abilities'
import Evolution from '../../components/PokeDetails/Evolution'
import Type from '../../components/PokeDetails/Type'
import { MainDetails } from './styles'

type PokemonSpecieResponse = {
  color: string
  base_happiness: number
  capture_rate: number
  evolution_chain: string
}
type PokemonDetails = PokeHomeInfo & PokemonSpecieResponse

const Details: React.FC = () => {
  const { pokemons } = useContext(pokeContext)
  const { poke_id } = useParams<{ poke_id: string }>()
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<any>()
  const [pokemon, setPokemon] = useState<PokemonDetails>()

  useEffect(() => {
    setIsLoading(true)

    const pokemonInCtx = pokemons.find(
      pkm => pkm.id.toString() === poke_id || pkm.name === poke_id
    )

    const getSpecieDetails = async (): Promise<PokemonSpecieResponse> => {
      const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon-species/${poke_id}`
      )

      const specieDetails = await response.json()

      return {
        color: specieDetails.color.name,
        base_happiness: specieDetails.base_happiness,
        capture_rate: specieDetails.capture_rate,
        evolution_chain: specieDetails.evolution_chain.url
      }
    }

    if (pokemonInCtx) {
      getSpecieDetails()
        .then(specieDetails => {
          setPokemon({
            ...pokemonInCtx,
            ...specieDetails
          })
          setIsLoading(false)
          setError(null)
        })
        .catch(err => {
          setError(err)
          setIsLoading(false)
        })
      return
    }

    fetch(
      `https://pokeapi.co/api/v2/pokemon/${poke_id
        .toLowerCase()
        .replace(/\s/g, '-')}`
    )
      .then(res => {
        if (!res.ok)
          throw new Error(
            res.status === 404
              ? 'Pokemon not found, did you type the full pokemon name?'
              : ''
          )
        return Promise.all([res.json(), getSpecieDetails()])
      })
      .then(([fetchedInfo, details]) => {
        setPokemon({
          ...parseFetchedPokemon(fetchedInfo),
          ...details
        })
        setIsLoading(false)
        setError(null)
      })
      .catch(err => {
        setError(err)
        setIsLoading(false)
      })
  }, [pokemons, poke_id])

  return (
    <>
      {!isLoading && !error && pokemon && (
        <>
          <MainDetails as="main">
            <Link to="/frontend-challenge">
              <img src={arrowIcon} alt="arrowIcon" />
            </Link>
            <section>
              <h1>
                #{pokemon.id}{' '}
                {pokemon.name[0].toUpperCase() +
                  pokemon.name.substr(1, pokemon.name.length)}
              </h1>
              <img
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`}
                alt="Bulbasaur art"
              />
              <Info
                color={pokemon.color}
                base_experience={pokemon.base_experience}
                base_happiness={pokemon.base_happiness}
                capture_rate={pokemon.capture_rate}
                height={pokemon.height}
                weight={pokemon.weight}
              />
              <Stats stats={pokemon.stats} />
            </section>
          </MainDetails>
          <Abilities abilities={pokemon.abilities} />
          <Type types={pokemon.types} />
          <Evolution url={pokemon.evolution_chain} />
        </>
      )}
      {error && (
        <>
          <Link to="/frontend-challenge">
            <img
              src={arrowIcon}
              alt="arrowIcon"
              style={{ width: '5rem', margin: '3rem' }}
            />
          </Link>
          <h1 className="info">{error?.message || 'Something went wrong'}</h1>
        </>
      )}
      {isLoading && <div className="spinner"></div>}
    </>
  )
}

export default Details
