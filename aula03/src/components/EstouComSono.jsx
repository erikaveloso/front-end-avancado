import React from 'react'

const EstouComSon = (props) => {
  return (
    <div>
        {props.comSono? <h1>Hora de descansar</h1> : <h1>Bora estudar mais um pouco</h1>}
    </div>
  )
}

export default EstouComSon