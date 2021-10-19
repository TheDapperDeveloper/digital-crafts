## Redux Notes

An action is dispatched (function)
Middleware intercepts the action (this is perfect for api calls)
After middleware is done with it, action matches a reducer
Reducers will then update state - reducers are the only thing that changes state
The store will then send the updated state which will cause a re-render

Redux makes it simpler to pass props to different components. You avoid props drilling

createStore is a function from redux that creates store. The store is a big object and state is an object so we access items by using dot notation.

Moving from local to global state removes the need for props
