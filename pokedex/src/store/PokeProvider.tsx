import React, { useEffect, useState } from 'react'

import getResponseArray from '../helpers/getResponseArray'
import parseFetchedPokemon from '../helpers/parseFetchedPokemon'
import pokeContext from './pokeContext'
import { PokeHomeInfo } from './pokeContext'

const PokeProvider: React.FC = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true)
  const [page, setPage] = useState(1)
  const [pokemons, setPokemons] = useState<PokeHomeInfo[]>([])
  const [error, setError] = useState<any>()

  useEffect(() => {
    const fetchPokemons = async () => {
      const responses = await getResponseArray(page, 15)
      const fetchedPokemons: PokeHomeInfo[] = []
      for (const response of responses) {
        const pokeRes = await response.json()
        fetchedPokemons.push(parseFetchedPokemon(pokeRes))
      }
      return fetchedPokemons
    }

    fetchPokemons()
      .then(fetchedPokemons => {
        setPokemons(prev => [...prev, ...fetchedPokemons])
        setIsLoading(false)
      })
      .catch(err => {
        setError(err.message || 'Something went wrong')
      })
  }, [page])

  const nextPage = () => setPage(prev => prev + 1)

  return (
    <pokeContext.Provider value={{ pokemons, isLoading, error, nextPage }}>
      {children}
    </pokeContext.Provider>
  )
}

export default PokeProvider
