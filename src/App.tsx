import React, { useReducer, ReactNode } from "react";

import {
  StateHook,
  EffectHook,
  ContextHook,
  RefHook,
} from "./components";
import { HookName } from "./HookName";

export enum ActionTypes {
  USE_STATE = "useState",
  USE_EFFECT = "useEffect",
  USE_CONTEXT = "useContext",
  USE_REDUCER = "useReducer",
  USE_CALLBACK = "useCallback",
  USE_MEMO = "useMemo",
  USE_REF = "useRef",
  USE_IMPERATIVE_HANDLE = "useImperativeHandle",
  USE_LAYOUT_EFFECT = "useLayoutEffect",
  USE_DEBUG_VALUE = "useDebugValue",
}

export type AppState = {
  currentComponent: ReactNode | null;
  name: string;
};

export type AppAction = {
  type: ActionTypes;
};

const initialState: AppState = {
  currentComponent: null,
  name: "",
};

function reducer(state: AppState, action: AppAction) {
  switch (action.type) {
    case ActionTypes.USE_STATE:
      return {
        currentComponent: <StateHook />,
        name: action.type,
      };
    case ActionTypes.USE_EFFECT:
      return {
        currentComponent: <EffectHook />,
        name: action.type,
      };
    case ActionTypes.USE_CONTEXT:
      return {
        currentComponent: <ContextHook />,
        name: action.type,
      };
    case ActionTypes.USE_REF:
      return {
        currentComponent: <RefHook />,
        name: action.type,
      };
    default:
      return initialState;
  }
}

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { currentComponent, name } = state;

  return (
    <div className="App">
      <button
        onClick={() =>
          dispatch({
            type: ActionTypes.USE_STATE,
          })
        }
      >
        useState
      </button>
      <button
        onClick={() =>
          dispatch({
            type: ActionTypes.USE_EFFECT,
          })
        }
      >
        useEffect
      </button>
      <button
        onClick={() =>
          dispatch({
            type: ActionTypes.USE_CONTEXT,
          })
        }
      >
        useContext
      </button>
      <button
        onClick={() =>
          dispatch({
            type: ActionTypes.USE_REDUCER,
          })
        }
      >
        useReducer
      </button>
      <button
        onClick={() =>
          dispatch({
            type: ActionTypes.USE_CALLBACK,
          })
        }
      >
        useCallback
      </button>
      <button
        onClick={() => dispatch({ type: ActionTypes.USE_MEMO })}
      >
        useMemo
      </button>
      <button onClick={() => dispatch({ type: ActionTypes.USE_REF })}>
        useRef
      </button>
      <button
        onClick={() =>
          dispatch({
            type: ActionTypes.USE_IMPERATIVE_HANDLE,
          })
        }
      >
        useImperativeHandle
      </button>
      <button
        onClick={() =>
          dispatch({
            type: ActionTypes.USE_LAYOUT_EFFECT,
          })
        }
      >
        useLayoutEffect
      </button>
      <button
        onClick={() =>
          dispatch({
            type: ActionTypes.USE_DEBUG_VALUE,
          })
        }
      >
        useDebugValue
      </button>
      {name && <HookName name={name} />}
      {currentComponent ? currentComponent : <p> Pick a hook! </p>}
    </div>
  );
};

export default App;
