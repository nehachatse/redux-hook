import { v4 as uuid } from "uuid";
import { actionConstants } from "./action";

const initState = {
  todos: [
    {
      title: "BUY BREAD",
      status: false,
      id: 1
    }
  ]
};
export const reducer = (state = initState, action) => {
  switch (action.type) {
    case actionConstants.ADD_TODO: {
      return {
        ...state,
        todos: [...state.todos, action.payload]
      };
    }

    case actionConstants.REMOVE_TODO_ITEM: {
      return {
        ...state,
        todos: state.todos.filter((item) => item.id !== action.payload.id)
      };
    }

    case actionConstants.TOGGLE_TODO_STATUS: {
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
