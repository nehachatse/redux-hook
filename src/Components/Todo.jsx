import { useDispatch } from "react-redux";
import { v4 as uuid } from "uuid";
import { addTodo, getTodosFailure, getTodosRequest, getTodosSuccess } from "../Redux/action";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";

export default function Todo() {
  const dispatch = useDispatch();

  const getTodos = () => {
    const reqAction = getTodosRequest();
    dispatch(reqAction);

    return fetch("https://todo-task-mock-server.herokuapp.com/todos")
            .then(res => res.json())
            .then(res => {
              dispatch(getTodosSuccess(res));
            })
            .catch(err => {
              dispatch(getTodosFailure())
            })
  }

  const handleAdd = async (text) => {
    // const action = addTodo({
    //   title: text,
    //   status: false,
    //   id: uuid()
    // });

    // dispatch(action);

    const data = {
        title: text,
        status: false,
        id: uuid()
      }

    const config = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    }
    console.log("post", config.data)

    dispatch(getTodosRequest());

    await fetch("https://todo-task-mock-server.herokuapp.com/todos", config)
    
    getTodos();

    

  };
  return (
    <div>
      <TodoInput onAdd={handleAdd} getTodos={getTodos}/>
      <TodoList getTodos={getTodos}/>
    </div>
  );
}
