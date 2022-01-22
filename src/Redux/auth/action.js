import { setData } from "../../utils/localStorage";
import {authConstants} from "./actionType";

export const loginSuccess = (token) => {
  setData("token", token)
  return {
    type: authConstants.LOGIN_SUCCESS,
    payload: {
      isAuth: true,
      token: token
    }
  }
}

