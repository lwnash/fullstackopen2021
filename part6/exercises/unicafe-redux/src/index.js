import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import counterReducer from "./counterReducer";

const store = createStore(counterReducer);

const App = () => {
  const good = () => {
    store.dispatch({
      type: "GOOD",
    });
  };
// dispatch(action) => change state => state in store
// payload:{}
  const neutral = () => {
    store.dispatch({
      type: "OK",
      payload: {

      },
      error: {
        
      }
    });
  };

  const bad = () => {
    store.dispatch({
      type: "BAD",
    });
  };

  const zero = () => {
    store.dispatch({
      type: "ZERO",
    });
  };

  return (
    <div>
      <button onClick={good}>good</button>
      <button onClick={neutral}>neutral</button>
      <button onClick={bad}>bad</button>
      <button onClick={zero}>reset stats</button>
      <div>good {store.getState().good}</div>
      <div>neutral {store.getState().ok}</div>
      <div>bad {store.getState().bad}</div>
    </div>
  );
};

const renderApp = () => {
  ReactDOM.render(<App />, document.getElementById("root"));
};

renderApp();
store.subscribe(renderApp);
