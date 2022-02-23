import React from "react";
import Header from "./components/Header";
import Todos from "./components/Todos";
import { useState } from "react";
import Footer from "./components/Footer";
import AddTodo from "./components/AddTodo";
import About from "./components/About";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default function App() {
  const onDelete = (todo) => {
    console.log("Todo deleted", todo);
    setTodos(
      todos.filter((e) => {
        return e !== todo;
      })
    );
  };
  const addTodo = (title, desc) => {
    console.log("Added a todo", title, desc);
    let sno;
    if (todos.length === 0) {
      sno = 0;
    } else {
      sno = todos[todos.length - 1].sno + 1;
    }
    const myTodo = {
      sno: sno,
      title: title,
      desc: desc,
    };
    console.log(myTodo);
    setTodos([...todos, myTodo]);
  };

  const [todos, setTodos] = useState([
    {
      sno: 1,
      title: "Go to the Market",
      desc: "You need to go to the market to but fruits",
    },
    {
      sno: 2,
      title: "Go to the Mall",
      desc: "You need to go to the market to but fruits2",
    },
    {
      sno: 3,
      title: "Go to the Hospital",
      desc: "You need to go to the market to but fruits3",
    },
  ]);
  return (
    <>
      <Router>
        <Header title="My Todos List"/>
        <Routes>
          <Route
            path="/todolist"
            element={
              <>
                <AddTodo addTodo={addTodo} />
                <Todos todos={todos} onDelete={onDelete} />
              </>
            }
          />

          <Route path="/about" element={<About />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}
