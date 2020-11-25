//store
//reducer
//state
//initial state
//dispatch
//subscribe
//action
//payload

//import createStore function from redux
//createStore function used to create the store.

const { createStore } = require("redux");

//initial state
const initialState = {
  bal: 10000,
};

//reducer
//business logic called as reducer
//we must deploy reducer to store

//arg1 is output, 2nd is input
const reducer = (state = initialState, action) => {
  //action.type is withdraw and action.value=2000
  switch (action.type) {
    case "WITHDRAW":
      return {
        //maintain immutability
        ...state,
        bal: state.bal - action.value,
      };
    case "DEPOSIT":
      return {
        ...state,
        bal: state.bal + action.value,
      };
      break;
  }
  return state;
};

const store = createStore(reducer);

store.subscribe(() => {
  console.log(store.getState());
});

//dispatch
store.dispatch({ type: "WITHDRAW", value: 2000 });
store.dispatch({ type: "DEPOSIT", value: 5000 });
