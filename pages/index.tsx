import React from "react";
import AddTodo from "../components/addTodo";
import TodoList from "../components/todoList";


const Home = () => {
  return (
    <>
      <AddTodo />
      <TodoList />
    </>
  )
}

export default Home