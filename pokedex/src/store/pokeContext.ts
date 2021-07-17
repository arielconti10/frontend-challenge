import { createContext } from 'react'

export type PokeHomeInfo = {
  id: number
  name: string
  abilities: string[]
  types: string[]
  height: number
  weight: number
  base_experience: number
  stats: {
    name: string
    base_stat: number
    effort: number
  }[]
}

type PokeContextState = {
  pokemons: PokeHomeInfo[]
  nextPage: () => void
  isLoading: boolean
  error: any
}

const initialState: PokeContextState = {
  pokemons: [],
  nextPage: () => {},
  isLoading: true,
  error: null
}

const pokeContext = createContext<PokeContextState>(initialState)

export default pokeContext
