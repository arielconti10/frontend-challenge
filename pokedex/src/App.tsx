import React from 'react'
import { Route } from 'react-router'

import GlobalStyles from './styles/GlobalStyles'
import Home from './pages/Home'
import Details from './pages/Details'

function App() {
  return (
    <>
      <Route path="/" exact component={Home} />
      <Route path="/:poke_id" component={Details} />
      <GlobalStyles />
    </>
  )
}

export default App
