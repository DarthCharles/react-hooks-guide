import "./styles.css";
import { StateHook, EffectHook } from "./Components";
import { useState, useReducer } from "react";

const initialState = { currentComponent: null };

function reducer(state, action) {
  switch (action.type) {
    case "useState":
      return { currentComponent: <StateHook /> };
    case "useEffect":
      return { currentComponent: <EffectHook /> };
    default:
      return { currentComponent: null };
  }
}

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { currentComponent } = state;

  return (
    <div className="App">
      <button onClick={() => dispatch({ type: "useState" })}>useState</button>
      <button onClick={() => dispatch({ type: "useEffect" })}>useEffect</button>
      <button onClick={() => dispatch({ type: "useContext" })}>
        useContext
      </button>
      {currentComponent ? currentComponent : <p> Pick a hook! </p>}
    </div>
  );
};

export default App;
