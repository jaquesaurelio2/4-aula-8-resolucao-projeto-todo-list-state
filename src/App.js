/**
  - Utilize o hook useState e crie um estado para o array de itens e inicialize-o
  com os dados importados
 */

import * as React from "react";
import "./styles.css";
import Item from "./components/Item";
import Form from "./components/Form";
import data from "../data";

export default function App() {
  const [todos] = React.useState(data);
  return (
    <div className="App">
      <h1>To-Do List</h1>
      <Form />
      {todos.map((todo, index) => (
        <Item key={index} title={todo.title} />
      ))}
    </div>
  );
}
