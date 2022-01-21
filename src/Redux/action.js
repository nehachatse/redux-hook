export const actionConstants = {
  ADD_TODO: "ADD_TODO",
  REMOVE_TODO_ITEM: "REMOVE_TODO_ITEM",
  TOGGLE_TODO_STATUS: "TOGGLE_TODO_STATUS"
};

export const addTodo = ({ title, status, id }) => {
  return {
    type: actionConstants.ADD_TODO,
    payload: {
      title,
      status,
      id
    }
  };
};

export const removeTodoItem = ({ id }) => {
  return {
    type: actionConstants.REMOVE_TODO_ITEM,
    payload: { id }
  };
};

export const toggleTodooItem = ({ status, id }) => {
  return {
    type: actionConstants.TOGGLE_TODO_STATUS,
    payload: {
      status,
      id
    }
  };
};
