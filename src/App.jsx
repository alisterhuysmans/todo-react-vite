import React, { useState } from "react";
import "./App.css";
//import components
import Form from "./components/Form.jsx";
import TodoList from "./components/TodoList.jsx";
import Todo from "./components/Todo.jsx";

const App = () => {
    const [inputText, setInputText] = useState("");
    const [todos, setTodos] = useState([]);
    return (
        <div className="App">
            <header>
                <h1>Alister's Todo List</h1>
            </header>
            <Form
                inputText={inputText}
                todos={todos}
                setTodos={setTodos}
                setInputText={setInputText}
            />
            <TodoList todos={todos} />
        </div>
    );
};

export default App;
