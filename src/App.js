import React, { useState } from "react";
import Navbar from "./components/Navbar";
import AddTodo from "./components/AddTodo"
import AllTodos from "./components/AllTodos/indexx";

const App = () => {

  const [todos, setTodos] = useState(JSON.parse(localStorage.getItem("todo")) || []);
    // {
  //      id: new Date().getTime(),
  //     title: "Learn Hindi",
  //     description: "Hindi is Bawl",
  //     isComplete: false
  // }
  
  const InsertTodos =(obj) => {

    const item = {
      id: new Date().getTime(),
      title: obj.title,
      description: obj.description,
      isComplete: false
    }
    setTodos([...todos, item])
    localStorage.setItem("todo", JSON.stringify([...todos, item]))
  }

  // const AllTodos = ()=> {
  //   return todos
  // }

  const DeleteTodo = (id) => {
    const newTodos = todos.filter((cur)=>cur.id !== id);
    setTodos(newTodos)
    localStorage.setItem("todo", JSON.stringify(newTodos))

  }

  const UpdateTodo = (id) => {
    const newTodos = todos.filter((cur) => {
      if(cur.id === id){
        cur.isComplete = true
      }
      return cur;
    });
    setTodos(newTodos)
    localStorage.setItem("todo", JSON.stringify(newTodos))
 
  }

  return(
    <>
      <Navbar/>
      <AddTodo InsertTodos= {InsertTodos}/>
      <AllTodos Todos = {todos} DeleteTodo = {DeleteTodo} UpdateTodo = {UpdateTodo}/>
    </>
  )
}

export default App