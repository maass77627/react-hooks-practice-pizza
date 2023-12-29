import React from "react";
//import { useState } from "react"
//import Pizza from "./Pizza";

function PizzaForm({formData, handleSubmit, handleToppingChange, handleSizeChange, handleVegChange}) {

  

 

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-row">
        <div className="col-5">
          <input
            onChange={handleToppingChange}
            className="form-control"
            type="text"
            value={formData.topping}
            name="topping"
            placeholder="Pizza Topping"
          />
        </div>
        <div  className="col">
          <select onChange={handleSizeChange} className="form-control" value={formData.size} name="size">
            <option value="Small">Small</option>
            <option value="Medium">Medium</option>
            <option value="Large">Large</option>
          </select>
        </div>
        <div className="col">
          <div className="form-check">
            <input
              onChange={handleVegChange}
              className="form-check-input"
              type="radio"
              name="vegetarian"
              value="Vegetarian"
            />
            <label className="form-check-label">Vegetarian</label>
          </div>
          <div className="form-check">
            <input
              onChange={handleVegChange}
              className="form-check-input"
              type="radio"
              name="vegetarian"
              value="Not Vegetarian"
            />
            <label className="form-check-label">Not Vegetarian</label>
          </div>
        </div>
        <div className="col">
          <button type="submit" className="btn btn-success">
            Submit
          </button>
        </div>
      </div>
    </form>
  );
}

export default PizzaForm;
