const initialState ={
    userName:"",
    userEmail:"",
    address:"",
    restaurants:"",
    userData: {}
}

export const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case "SET_USERNAME":
        return {...state, userName: action.payload};

        case "SET_EMAIL":
        return {...state, userEmail: "john@gmail.com"}

        case "SET_ADDRESS":
        return {...state, address: "main street"}

        case "SET_RESTAURANTS":
        return {...state, restaurants: action.payload}

        case "GET_USERDATA":
            return {...state, userData: action.payload}

        default:
            return state;
    }
}