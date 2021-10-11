import { combineReducers } from "redux";
import UserData from "./userData";
import GraphData from "./graphData";

const rootReducer = combineReducers({
  UserData,
  GraphData,
  // switch (action.type) {
  //     case "SET_USERNAME":
  //     return {...state, userName: action.payload};

  //     case "SET_EMAIL":
  //     return {...state, userEmail: "john@gmail.com"}

  //     case "SET_ADDRESS":
  //     return {...state, address: "main street"}

  //     // case "GET_USERDATA":
  //     //     return {...state, userData: action.payload}

  //     default:
  //         return state;
  // }
});

export default rootReducer;
