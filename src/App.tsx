import { useReducer, ReactNode } from "react";

import { StateHook, EffectHook } from "./components";

export enum ActionTypes {
  USE_STATE = "USE_STATE",
  USE_EFFECT = "USE_EFFECT",
  USE_CONTEXT = "USE_CONTEXT",
  USE_REDUCER = "USE_REDUCER",
  USE_CALLBACK = "USE_CALLBACK",
  USE_MEMO = "USE_MEMO",
  USE_REF = "USE_REF",
  USE_IMPERATIVE_HANDLE = "USE_IMPERATIVE_HANDLE",
  USE_LAYOUT_EFFECT = "USE_LAYOUT_EFFECT",
  USE_DEBUG_VALUE = "USE_DEBUG_VALUE"
}

export type AppState = {
  currentComponent: ReactNode | null;
};

export type AppAction = {
  type: ActionTypes;
};

const initialState = { currentComponent: null };

function reducer(state: AppState, action: AppAction) {
  switch (action.type) {
    case ActionTypes.USE_STATE:
      return { currentComponent: <StateHook /> };
    case ActionTypes.USE_EFFECT:
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
      <button onClick={() => dispatch({ type: ActionTypes.USE_STATE })}>
        useState
      </button>
      <button onClick={() => dispatch({ type: ActionTypes.USE_EFFECT })}>
        useEffect
      </button>
      <button onClick={() => dispatch({ type: ActionTypes.USE_CONTEXT })}>
        useContext
      </button>
      <button onClick={() => dispatch({ type: ActionTypes.USE_REDUCER })}>
        useContext
      </button>
      <button onClick={() => dispatch({ type: ActionTypes.USE_CALLBACK })}>
        useCallback
      </button>
      <button onClick={() => dispatch({ type: ActionTypes.USE_MEMO })}>
        useMemo
      </button>
      <button onClick={() => dispatch({ type: ActionTypes.USE_REF })}>
        useRef
      </button>
      <button
        onClick={() => dispatch({ type: ActionTypes.USE_IMPERATIVE_HANDLE })}
      >
        useImperativeHandle
      </button>
      <button onClick={() => dispatch({ type: ActionTypes.USE_LAYOUT_EFFECT })}>
        useLayoutEffect
      </button>
      <button onClick={() => dispatch({ type: ActionTypes.USE_DEBUG_VALUE })}>
        useDebugValue
      </button>
      {currentComponent ? currentComponent : <p> Pick a hook! </p>}
    </div>
  );
};

export default App;
