import { useState } from 'react'
import './App.css'
import Grid from './components/Grid'
import Honeycomb from './components/Honeycomb'

function App() {

  return (
    <div className="App">
      <nav>
        <h1>Spelling Bordle</h1>
      </nav>
      <Grid />
      <Honeycomb />
    </div>
  )
}

export default App
