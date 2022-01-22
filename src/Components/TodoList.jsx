import { useEffect } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { getTodosFailure, getTodosRequest, getTodosSuccess, removeTodoItem, toggleTodooItem } from "../Redux/app/action";

function TodoItem({ title, status, id, getTodos }) {
  const dispatch = useDispatch();

  const handleDelete = async (id) => {
    // const action = removeTodoItem({
    //   id
    // });
    // dispatch(action);

    const config = {
      method: 'DELETE'
    }

    await fetch(`https://todo-task-mock-server.herokuapp.com/todos/${id}`, config);

    getTodos();

  };

  const handleToggle = async (id, status) => {
    const action = toggleTodooItem({
      id,
      status
    });

    dispatch(action);
    // const config = {
    //   method: 'PATCH',
    //   body: {}
    // }
  };
  return (
    <div style={{ display: "flex", padding: "1rem", justifyContent: "center" }}>
      <div style={{ marginRight: "1rem" }}>{title}</div>
      <div style={{ marginRight: "1rem" }}>{`${status}`}</div>
      <button
        onClick={() => handleToggle(id, status)}
        style={{ marginRight: "1rem" }}
      >
        Toggle
      </button>
      <button onClick={() => handleDelete(id)}>Delete</button>
    </div>
  );
}

export default function TodoList({getTodos}) {
  const {todos, isLoading, isError} = useSelector((state) => state.app, shallowEqual);

  const dispatch = useDispatch();

  // const getTodos = () => {
  //   const reqAction = getTodosRequest();
  //   dispatch(reqAction);

  //   return fetch("https://todo-task-mock-server.herokuapp.com/todos")
  //           .then(res => res.json())
  //           .then(res => {
  //             dispatch(getTodosSuccess(res));
  //           })
  //           .catch(err => {
  //             dispatch(getTodosFailure())
  //           })
  // }

  useEffect( () => {
    getTodos();
  }, [])

  return (
    <div>
      {isLoading && <h3>Loading....</h3>}
      {isError && <h3>Something's wrong!</h3>}
      {todos.map((item) => (
        <TodoItem key={item.id} {...item} getTodos={getTodos}/>
      ))}
    </div>
  );
}
