import React, { useEffect } from "react";
import Pizza from "./Pizza";

function PizzaList({ pizzas, setPizzas, handleEdit }) {
// FETCHING PIZZA ARRAY
  useEffect(() => {
    fetch('http://localhost:3001/pizzas')
      .then(resp => resp.json())
      .then(data => setPizzas(data))
  }, [])
// MAP THROUGH PIZZAS TO DISPLAY 
  const pizzaDisplay = pizzas.map(piz => <Pizza key={ piz.id } piz={ piz } handleEdit={ handleEdit } />)
  return (
    <table className="table table-striped">
      <thead>
        <tr>
          <th scope="col">Topping</th>
          <th scope="col">Size</th>
          <th scope="col">Vegetarian?</th>
          <th scope="col">Edit</th>
        </tr>
      </thead>
      <tbody>
        {
          pizzaDisplay
        }
      </tbody>
    </table>
  );
}

export default PizzaList;
