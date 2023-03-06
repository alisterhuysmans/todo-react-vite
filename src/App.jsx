import "./App.css";
//import components
import Form from "./components/Form.jsx";
import TodoList from "./components/TodoList.jsx";

function App() {
    return (
        <div className="App">
            <header>
                <h1>Alister's Todo List</h1>
            </header>
            <Form />
            <TodoList />
        </div>
    );
}

export default App;
