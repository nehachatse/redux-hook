import { setData } from "../utils/localStorage";

export const actionConstants = {
  GET_TODO_REQUEST: "GET_TODO_REQUEST",
  GET_TODO_SUCCESS: "GET_TODO_SUCCESS",
  GET_TODO_FAILURE: "GET_TODO_FAILURE",
  LOGIN_SUCCESS: "LOGIN_SUCCESS",
  ADD_TODO: "ADD_TODO",
  REMOVE_TODO_ITEM: "REMOVE_TODO_ITEM",
  TOGGLE_TODO_STATUS: "TOGGLE_TODO_STATUS"
};

export const loginSuccess = (token) => {
  setData("token", token)
  return {
    type: actionConstants.LOGIN_SUCCESS,
    payload: {
      isAuth: true,
      token: token
    }
  }
}

// export const setToken = (token) => {
//   return {
//     type: actionConstants.SET_TOKEN,
//     payload: {
//       token: token
//     }
//   }
// }

export const getTodosRequest =() => {
  return {
    type: actionConstants.GET_TODO_REQUEST,
    payload: {
      isLoading: true
    }
  }
}

export const getTodosSuccess = (todos) => {
  return {
    type: actionConstants.GET_TODO_SUCCESS,
    payload: {
      todos: todos
    }
  }
}

export const getTodosFailure = () => {
  return {
    type: actionConstants.GET_TODO_FAILURE,
    payload: {
      isError: true
    }
  }
}

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
