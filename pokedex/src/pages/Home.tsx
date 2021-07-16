import React from 'react'

import pokedexIcon from '../assets/images/pokedexIcon.svg'
import searchIcon from '../assets/images/searchIcon.svg'
import Container from '../components/Container'
import Header from '../components/Header'
import AllPokemons from '../components/AllPokemons'

const Home: React.FC = () => {
  return (
    <>
      <Header>
        <Container>
          <h1 className="logo">
            <img src={pokedexIcon} alt="Pokedex Icon" />
            Pokédex
          </h1>
          <div className="input-group">
            <input
              type="text"
              placeholder="Search"
              aria-label="Search for a pokemon"
            />
            <img src={searchIcon} alt="Search Icon" />
          </div>
        </Container>
      </Header>
      <AllPokemons />
    </>
  )
}

export default Home
