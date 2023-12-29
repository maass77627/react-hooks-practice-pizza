import React from "react";
import Header from "./Header";
import PizzaForm from "./PizzaForm";
import PizzaList from "./PizzaList";
import { useState } from "react";
import { useEffect } from "react/cjs/react.development";

function App() {

  const [pizza, setPizza] = useState([])

  const [ formData, setFormData ] = useState({
    id: 2,
    topping: "cheese",
    size: "small",
    vegetarian: "yes",
  })

  function editPizza(pizza) {
    setFormData({
      id: pizza.id,
      topping: pizza.topping,
      size: pizza.size,
      vegetarian: pizza.vegetarian,
    })
  }

  function handleToppingChange(e){
    console.log(e.target.value)
    let value = e.target.value
    setFormData({...formData, topping: value})

  }

  function handleVegChange(e){
    //console.log(e.target.value)
    let value = e.target.value
    if (value === "Vegetarian") {
    setFormData({...formData, vegetarian: true})
    } else {
      setFormData({...formData, vegetarian: false})
    }
  }

  function handleSizeChange(e){
    console.log(e.target.value)
    let value = e.target.value
    setFormData({...formData, size: value})

  }

  function handleSubmit(e) {
    e.preventDefault()
    console.log(formData.id)
   let id = formData.id
   fetch(`http://localhost:3001/pizzas/${id}`, {
    method: "PATCH",
   headers: {
   "Content-Type": "application/json"
  }, 
  body: JSON.stringify(formData)
   })

  }

  useEffect(() => {
    fetch("http://localhost:3001/pizzas")
    .then((response)=> response.json())
    .then((json) => {
    console.log(json)
    setPizza(json)
  })
  }, [])

  return (
    <>
      <Header />
      <PizzaForm handleToppingChange={handleToppingChange} handleVegChange={handleVegChange} handleSizeChange={handleSizeChange} handleSubmit={handleSubmit} formData={formData}/>
      <PizzaList editPizza={editPizza} pizza={pizza}/>
    </>
  );
}

export default App;
