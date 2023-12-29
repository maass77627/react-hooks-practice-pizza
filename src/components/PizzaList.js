import React from "react";
import Pizza from "./Pizza";

function PizzaList({pizza, editPizza}) {
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
        {pizza.map((pizza) => <Pizza editPizza={editPizza} key={pizza.id} pizza={pizza}/>
          //render Pizza here
        )}
      </tbody>
    </table>
  );
}

export default PizzaList;
