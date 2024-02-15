import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import "./App.css";

function App() {
  const [todoInput, setTodoInput] = useState("");
  const [todos, setTodos] = useState([]);
  const addTodo = () => {
    setTodos([...todos, todoInput]);
    setTodoInput('');
  };
  const removeTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };
  
  
  return (
    <>
      <div className="heroSection">
        <Form style={{display:"flex"}}>
          <Form.Group controlId="formBasicEmail" >
            <Form.Label>Hedef</Form.Label>
            <Form.Control
              type="text"
              placeholder="Bir hedef girin"
              value={todoInput}
              onChange={(e) => setTodoInput(e.target.value)}
            />
          </Form.Group>
          <Button variant="primary" onClick={() => addTodo()}>
            Ekle
          </Button>
        </Form>
        <ul>
          {todos.map((todo, index) => (
            <li
              key={index}
              onClick={() => removeTodo(index)}
              style={{ cursor: "pointer" }}
            >
              {todo} 
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default App;
