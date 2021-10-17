import { at } from "lodash";
import {
    INCREMENT_COUNTER,
    DECREMENT_COUNTER,
  } from "../action-types/counter-types";

  
  

export const ConsoleLogVariable = (name) => {
    console.log("🚀 ",name);
  }

export const IncrementCounter = (dispatch, message)=> {
    ConsoleLogVariable(message)
    dispatch({type: INCREMENT_COUNTER})
}

export const DecrementCounter = (dispatch, message)=> {
    ConsoleLogVariable(message)
    dispatch({type: DECREMENT_COUNTER})
}

