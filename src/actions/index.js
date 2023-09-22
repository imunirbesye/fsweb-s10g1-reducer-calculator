export const ADD_ONE = "ADD_ONE"; 
export const APPLY_NUMBER = "APPLY_NUMBER";
export const CHANGE_OPERATION = "CHANGE_OPERATION";
export const CLEAR_DISPLAY = "CLEAR_DISPLAY";
export const SAVE_MEMORY = "SAVE_MEMORY";
export const GET_MEMORY = "GET_MEMORY";
export const CLEAR_MEMORY = "CLEAR_MEMORY";

export const addOne = () => {
  return ({ type: ADD_ONE });
}

export const applyNumber = (number) => {  
  return ({ type: APPLY_NUMBER, payload: number });
}

export const changeOperation = (oper) => { 
  return ({ type: CHANGE_OPERATION, payload: oper });
}

export const clearDisplay = () => {
  return ({ type: CLEAR_DISPLAY });
}

//Memory 

export const saveMemory = () => {
  return ({type: SAVE_MEMORY});
}

export const getMemory = () => {
  return ({type: GET_MEMORY});
}

export const cleanMemory = () => {
  return ({type: CLEAR_MEMORY});
}