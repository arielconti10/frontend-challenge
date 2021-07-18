import React, { useRef, MutableRefObject } from 'react'
import { useHistory } from 'react-router'

import pokedexIcon from '../../assets/images/pokedexIcon.svg'
import searchIcon from '../../assets/images/searchIcon.svg'
import Container from '../../components/Container'
import Header from '../../components/Header'
import AllPokemons from '../../components/AllPokemons'

const Home: React.FC = () => {
  const inputRef = useRef() as MutableRefObject<HTMLInputElement>
  const history = useHistory()

  return (
    <>
      <Header>
        <Container>
          <h1 className="logo">
            <img src={pokedexIcon} alt="Pokedex Icon" />
            Pokédex
          </h1>
          <form
            onSubmit={evt => {
              evt.preventDefault()
              history.push('/' + inputRef.current.value)
            }}
          >
            <input
              type="text"
              placeholder="Search"
              aria-label="Search for a pokemon"
              ref={inputRef}
            />
            <button type="submit">
              <img src={searchIcon} alt="Search Icon" />
            </button>
          </form>
        </Container>
      </Header>
      <AllPokemons />
    </>
  )
}

export default Home
