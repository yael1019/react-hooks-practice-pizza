import React, { useState } from "react";
import Header from "./Header";
import PizzaForm from "./PizzaForm";
import PizzaList from "./PizzaList";

function App() {
// INITIALIZING STATE FOR PIZZA ARRAY
  const [pizzas, setPizzas] = useState([])
// INITIALIZE STATE FOR FORM
  const [form, setForm] = useState({
    topping: '',
    size: 'Small',
    vegetarian: 'Not Vegetarian'
  })

  function handleEdit(piz) {
    setForm({
      topping: piz.topping,
      size: piz.size,
      vegetarian: piz.vegetarian
    })
  }

  function handleSubmit(e) {
    e.preventDefault();
    
  }

  return (
    <>
      <Header />
      <PizzaForm form={ form } setForm={ setForm } handleSubmit={ handleSubmit } />
      <PizzaList pizzas={ pizzas } setPizzas={ setPizzas } handleEdit={ handleEdit } />
    </>
  );
}

export default App;
