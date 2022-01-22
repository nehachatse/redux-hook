import { v4 as uuid } from "uuid";
import { appConstants } from "./actionTypes";

const initState = {
  todos: [],
  isLoading: true,
  isError: false,
};
const reducer = (state = initState, action) => {
  console.log("in reducer=", state, action )
  switch (action.type) {

    case appConstants.GET_TODO_REQUEST:{
      return {
        ...state,
        isLoading: action.payload.isLoading
      }
    }

    case appConstants.GET_TODO_SUCCESS:{
      return {
        ...state,
        todos: action.payload.todos,
        isLoading: false
      }
    }

    case appConstants.GET_TODO_FAILURE: {
      return {
        ...state,
        isLoading: false,
        isError: action.payload.isError
      }
    }

    case appConstants.ADD_TODO: {
      return {
        ...state,
        todos: [...state.todos, action.payload]
      };
    }

    case appConstants.REMOVE_TODO_ITEM: {
      return {
        ...state,
        todos: state.todos.filter((item) => item.id !== action.payload.id)
      };
    }

    case appConstants.TOGGLE_TODO_STATUS: {
      return {
        ...state,
        todos: state.todos.map((item) =>
          item.id === action.payload.id
            ? { ...item, status: !action.payload.status }
            : item
        )
      };
    }

    default:
      return state;
  }
};

export default reducer;