import React from 'react'
import EstouConseguindoAprenderReact from './components/EstouConseguindoAprenderReact'
import EstouComSon from './components/EstouComSono'
import Aluno from './components/Aluno'
import Linguagens from './components/Linguagens'
import Produto from './components/Produto'

const App = () => {
  return (
    <div>
      <EstouConseguindoAprenderReact estouConseguindo={false} />
      <EstouComSon comSono={true} />

      {
        [
          {nome: "Érika", email: "erikaveloso@msn.com", curso: "Sistemas para Internet", media: 10.0 },
          {nome: "Luiz Eduardo", email: "luizeduardo@gmail.com", curso: "Sistemas para Internet", media: 8.0 },
          {nome: "Richelle", email: "richelle@hotmail.com", curso: "Sistemas para Internet", media: 6.0 }
        ].map((aluno) => 
          <Aluno nome={aluno.nome} email={aluno.email} curso={aluno.curso} media={aluno.media} />
        )
      }

      {
        [
          {nome: "Java", dificuldade: "fácil" },
          {nome: "Python", dificuldade: "médio"},
          {nome: "JavaScript", dificuldade: "difícil"}
        ].map((linguagens) => 
          <Linguagens nome={linguagens.nome} dificuldade={linguagens.dificuldade} />
        )
      }


      {
        [
          {nome: "Garrafa", preco: 50, categoria: "utilidades", quantidade: 0 },
          {nome: "Toalha", preco: 70, categoria: "utilidades", quantidade: 2},
          {nome: "Mochila", preco: 250, categoria: "utilidades", quantidade: 10}
        ].map((produto) => 
          <Produto nome={produto.nome} preco={produto.preco} categoria={produto.categoria} quantidade={produto.quantidade}/>
        )
      }

    </div>
  )
}

export default App