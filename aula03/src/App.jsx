import React from 'react'
import EstouConseguindoAprenderReact from './components/EstouConseguindoAprenderReact'
import EstouComSon from './components/EstouComSono'

const App = () => {
  return (
    <div>
      <EstouConseguindoAprenderReact estouConseguindo={false} />
      <EstouComSon comSono={true} />
    </div>
  )
}

export default App