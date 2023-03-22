import React from "react";

function Pizza({ piz, handleEdit }) {
  return (
    <tr>
      <td>{ piz.topping }</td>
      <td>{ piz.size }</td>
      <td>{ piz.vegetarian }</td>
      <td>
        <button type="button" className="btn btn-primary" onClick={ () => handleEdit(piz)} >
          Edit Pizza
        </button>
      </td>
    </tr>
  );
}

export default Pizza;
