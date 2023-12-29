import React from "react";

function Pizza({pizza, editPizza}) {

  function handleClick(pizza) {
    console.log(pizza)
    editPizza(pizza)
  }

  return (
    <tr>
      <td>{pizza.topping}</td>
      <td>{pizza.size}</td>
      <td>{pizza.vegetarian}</td>
      <td>
        <button onClick={() => handleClick(pizza)} type="button" className="btn btn-primary">
          Edit Pizza
        </button>
      </td>
    </tr>
  );
}

export default Pizza;
