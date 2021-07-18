import React from 'react'
import { Route } from 'react-router'

import PokeProvider from './store/PokeProvider'
import GlobalStyles from './styles/GlobalStyles'
import Home from './pages/Home'
import Details from './pages/Details'

function App() {
  return (
    <PokeProvider>
      <Route path="/frontend-challenge" exact component={Home} />
      <Route path="/frontend-challenge/:poke_id" component={Details} />
      <GlobalStyles />
    </PokeProvider>
  )
}

export default App
