import React from 'react'
import { Route } from 'react-router'

import GlobalStyles from './styles/GlobalStyles'
import Home from './pages/Home'

function App() {
  return (
    <>
      <Route path="/" exact component={Home} />
      <GlobalStyles />
    </>
  )
}

export default App
