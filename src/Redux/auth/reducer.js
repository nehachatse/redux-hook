import { loadData } from "../../utils/localStorage";
import { authConstants } from "./actionType";

const token = loadData("token");

const initState = {
  isAuth: token !== null,
  token: token
};
const reducer = (state = initState, action) => {
  console.log("in reducer=", state, action )
  switch (action.type) {
    case authConstants.LOGIN_SUCCESS:{
      return {
        ...state,
        isAuth: true,
        token: action.payload.token
      }
    }

    default:
      return state;
  }
};

export default reducer;
