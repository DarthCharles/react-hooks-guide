import React, { useReducer, ReactNode } from 'react';

import {
  CallbackHook,
  StateHook,
  EffectHook,
  ContextHook,
  MemoHook,
  RefHook,
  CustomHook,
  ImperativeHandleHook,
  LayoutEffectHook,
  DebugValueHook,
  ReducerHook,
} from './components';
import { HookName } from './HookName';
import { ThemeProvider } from './ThemeProvider';

export enum ActionTypes {
  USE_STATE = 'useState',
  USE_EFFECT = 'useEffect',
  USE_CONTEXT = 'useContext',
  USE_REDUCER = 'useReducer',
  USE_MEMO = 'useMemo',
  USE_CALLBACK = 'useCallback',
  USE_REF = 'useRef',
  USE_IMPERATIVE_HANDLE = 'useImperativeHandle',
  USE_LAYOUT_EFFECT = 'useLayoutEffect',
  USE_DEBUG_VALUE = 'useDebugValue',
  USE_CUSTOM = 'useCustom',
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
  name: '',
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
    case ActionTypes.USE_REDUCER:
      return {
        currentComponent: <ReducerHook />,
        name: action.type,
      };
    case ActionTypes.USE_CALLBACK:
      return {
        currentComponent: <CallbackHook />,
        name: action.type,
      };
    case ActionTypes.USE_MEMO:
      return {
        currentComponent: <MemoHook />,
        name: action.type,
      };
    case ActionTypes.USE_IMPERATIVE_HANDLE:
      return {
        currentComponent: <ImperativeHandleHook />,
        name: action.type,
      };
    case ActionTypes.USE_LAYOUT_EFFECT:
      return {
        currentComponent: <LayoutEffectHook />,
        name: action.type,
      };
    case ActionTypes.USE_DEBUG_VALUE:
      return {
        currentComponent: <DebugValueHook />,
        name: action.type,
      };
    case ActionTypes.USE_CUSTOM:
      return {
        currentComponent: <CustomHook />,
        name: action.type,
      };
    default:
      return state;
  }
}

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { currentComponent, name } = state;

  return (
    <ThemeProvider>
      <div className="App">
        {Object.keys(ActionTypes).map((key, index) => (
          <button
            key={`b_${index}`}
            onClick={() =>
              dispatch({
                type: ActionTypes[key],
              })
            }
          >
            {ActionTypes[key]}
          </button>
        ))}
        {name && <HookName name={name} />}
        {currentComponent ? currentComponent : <p> Pick a hook! </p>}
      </div>
    </ThemeProvider>
  );
};

export default App;
