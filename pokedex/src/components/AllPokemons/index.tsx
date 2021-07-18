import React, { useContext, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'

import pokeContext from '../../store/pokeContext'
import PokeTypeBadge from '../PokeTypeBadge'
import { Wrapper, PokeCard } from './styles'

const AllPokemons: React.FC = () => {
  const { pokemons, nextPage, isLoading, error } = useContext(pokeContext)
  const nextPageRef = useRef(nextPage)
  const qtdPokemons = pokemons.length

  useEffect(() => {
    if (qtdPokemons > 0 && qtdPokemons < 1118) {
      const intersectionObserver = new IntersectionObserver(entries => {
        if (entries.some(entry => entry.isIntersecting)) {
          nextPageRef.current()
        }
      })
      intersectionObserver.observe(
        document.querySelector('#sentinel') as Element
      )
      return () => intersectionObserver.disconnect()
    }
  }, [qtdPokemons])

  return (
    <>
      <Wrapper>
        {pokemons.map(pokemon => (
          <Link to={`/${pokemon.id}`} key={pokemon.id}>
            <PokeCard>
              <img
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`}
                alt={pokemon.name}
              />
              <span>
                {pokemon.name
                  .replace(/-/g, ' ')
                  .replace(/(^\w|\s\w)/g, str => str.toUpperCase())}
              </span>
              <div className="badges">
                {pokemon.types.map(type => (
                  <PokeTypeBadge className={type} key={type}>
                    {type[0].toUpperCase() + type.substr(1, type.length - 1)}
                  </PokeTypeBadge>
                ))}
              </div>
            </PokeCard>
          </Link>
        ))}
      </Wrapper>
      {(qtdPokemons || isLoading) && qtdPokemons < 1118 && (
        <div id="sentinel" className="spinner"></div>
      )}
      {error && !isLoading && (
        <h1 className="info">{error?.message || 'Something went wrong!'}</h1>
      )}
    </>
  )
}

export default AllPokemons
