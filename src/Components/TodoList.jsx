import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { removeTodoItem, toggleTodooItem } from "../Redux/action";

function TodoItem({ title, status, id }) {
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    const action = removeTodoItem({
      id
    });
    dispatch(action);
  };

  const handleToggle = (id, status) => {
    const action = toggleTodooItem({
      id,
      status
    });

    dispatch(action);
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

export default function TodoList() {
  const {todos} = useSelector((state) => {
    return {
      todos: state.todos
    } 
  }, shallowEqual);

  return (
    <div>
      {todos.map((item) => (
        <TodoItem key={item.id} {...item} />
      ))}
    </div>
  );
}
