import * as C from "./App.styles"
import './global.css'
import { useState } from "react"
import { Item } from './types/Item'

export const App = () => {
  const [list, setList] = useState<Item[]>( [
    { id: 1, name: 'Comprar um bolo', done: false},
    { id: 2, name: 'Comprar o tenis', done: false},
  ]);


  return (
    <C.Container>
      <C.Area>
        <C.Header>Lista de Tarefas</C.Header>

          {}

          {list.map((item, index) => (
            <div>...</div>
          ))}

      </C.Area>
    </C.Container>
  )
}