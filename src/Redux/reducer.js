// import { v4 as uuid } from "uuid";
// import { loadData } from "../utils/localStorage";
// import { actionConstants } from "./action";

// const token = loadData("token");

// const initState = {
//   todos: [],
//   isLoading: true,
//   isError: false,
//   isAuth: token !== null,
//   token: token
// };
// export const reducer = (state = initState, action) => {
//   console.log("in reducer=", state, action )
//   switch (action.type) {
//     case actionConstants.LOGIN_SUCCESS:{
//       return {
//         ...state,
//         isAuth: true,
//         token: action.payload.token
//       }
//     }

//     case actionConstants.GET_TODO_REQUEST:{
//       return {
//         ...state,
//         isLoading: action.payload.isLoading
//       }
//     }

//     case actionConstants.GET_TODO_SUCCESS:{
//       return {
//         ...state,
//         todos: action.payload.todos,
//         isLoading: false
//       }
//     }

//     case actionConstants.GET_TODO_FAILURE: {
//       return {
//         ...state,
//         isLoading: false,
//         isError: action.payload.isError
//       }
//     }

//     case actionConstants.ADD_TODO: {
//       return {
//         ...state,
//         todos: [...state.todos, action.payload]
//       };
//     }

//     case actionConstants.REMOVE_TODO_ITEM: {
//       return {
//         ...state,
//         todos: state.todos.filter((item) => item.id !== action.payload.id)
//       };
//     }

//     case actionConstants.TOGGLE_TODO_STATUS: {
//       return {
//         ...state,
//         todos: state.todos.map((item) =>
//           item.id === action.payload.id
//             ? { ...item, status: !action.payload.status }
//             : item
//         )
//       };
//     }

//     default:
//       return state;
//   }
// };
