const initialState = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case "SIGNUPFORM_FIRSTNAME":
      return { ...state, firstName: action.payload };
    case "SIGNUPFORM_LASTNAME":
      return { ...state, lastName: action.payload };
    case "SIGNUPFORM_EMAIL":
      return { ...state, email: action.payload };
    case "SIGNUPFORM_PASSWORD":
      return { ...state, password: action.payload };
      default:
          return state
  }
}

export default rootReducer;
