import { PokeHomeInfo } from '../store/pokeContext'

function parseFetchedPokemon(pokemon: Record<string, any>): PokeHomeInfo {
  return {
    id: pokemon.id,
    name: pokemon.name,
    abilities: pokemon.abilities.map(
      ({ ability }: Record<string, any>) => ability.name
    ),
    types: pokemon.types.map(({ type }: Record<string, any>) => type.name),
    height: pokemon.height,
    weight: pokemon.weight,
    base_experience: pokemon.base_experience,
    stats: pokemon.stats.map((stat: Record<string, any>) => ({
      name: stat.stat.name,
      base_stat: stat.base_stat,
      effort: stat.effort
    }))
  }
}

export default parseFetchedPokemon
