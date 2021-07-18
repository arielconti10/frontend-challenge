import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import Card from '../../Card'
import { EvolutionWrapper } from './styles'

type PokemonEvolution = {
  name: string
  initial: boolean
  min_level?: number
  min_happiness?: number
  id: string
}

type EvolutionProps = {
  url: string
}

const parseEvolutions = (
  evolves_to: Record<string, any>[],
  parsedEvolutions: PokemonEvolution[] = []
): PokemonEvolution[] => {
  for (const evolves of evolves_to) {
    if (evolves.evolves_to.length > 0) {
      return parsedEvolutions.concat(
        parseEvolutions(
          evolves.evolves_to,
          parsedEvolutions.concat({
            name: evolves.species.name,
            initial: false,
            id: evolves.species.url.split('/')[
              evolves.species.url.split('/').length - 2
            ],
            min_level: evolves.evolution_details[0].min_level,
            min_happiness: evolves.evolution_details[0].min_happiness
          })
        )
      )
    }
    parsedEvolutions.push({
      name: evolves.species.name,
      id: evolves.species.url.split('/')[
        evolves.species.url.split('/').length - 2
      ],
      initial: false,
      min_level: evolves.evolution_details[0].min_level,
      min_happiness: evolves.evolution_details[0].min_happiness
    })
  }
  return parsedEvolutions
}

const Evolution: React.FC<EvolutionProps> = ({ url }) => {
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<any>()
  const [evolutions, setEvolutions] = useState<PokemonEvolution[]>([])

  useEffect(() => {
    const getEvolutions = async (): Promise<PokemonEvolution[]> => {
      const response = await fetch(url)
      const { chain } = await response.json()
      const initial = {
        name: chain.species.name,
        initial: true,
        id: chain.species.url.split('/')[
          chain.species.url.split('/').length - 2
        ]
      }
      return [initial, ...parseEvolutions(chain.evolves_to)]
    }

    getEvolutions()
      .then(fetchedEvolutions => {
        setEvolutions(fetchedEvolutions)
        setIsLoading(false)
        setError(null)
      })
      .then(err => {
        setError(err)
        setIsLoading(false)
      })
  }, [url])

  return (
    <>
      <EvolutionWrapper as="section" className="wrapper">
        <h2>Evolution</h2>
        <div className="cards">
          {evolutions.map(evolution => (
            <Link
              to={`/frontend-challenge/${evolution.id}`}
              key={evolution.name}
              onClick={() => {
                window.scrollTo(0, 0)
              }}
            >
              <Card>
                <img
                  src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${evolution.id}.png`}
                  alt={evolution.name}
                />
                <h3>
                  {evolution.name[0].toUpperCase() +
                    evolution.name.substr(1, evolution.name.length)}
                </h3>
                {evolution.initial && <p>Initial</p>}
                {evolution.min_level && <p>Min Level: {evolution.min_level}</p>}
                {evolution.min_happiness && (
                  <p>Min Happiness: {evolution.min_happiness}</p>
                )}
                {!evolution.min_happiness &&
                  !evolution.min_level &&
                  !evolution.initial && <p>Other requirements</p>}
              </Card>
            </Link>
          ))}
        </div>
      </EvolutionWrapper>
      {error && (
        <h1 className="info">{error?.message || 'Something went wrong'}</h1>
      )}
      {isLoading && <div className="spinner"></div>}
    </>
  )
}

export default Evolution
