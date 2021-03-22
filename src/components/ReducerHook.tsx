import React, { useReducer } from 'react';
import styled from 'styled-components';

const StyledInput = styled.input`
  height: 30px;
  width: 165px;
`;

const StyledButton = styled.button`
  height: 36px;
  margin-top: 10px;
`;

export enum CounterActionTypes {
  ADD = 'ADD',
  SUBSTRACT = 'SUBSTRACT',
  MULTIPLY = 'MULTIPLY',
}

export type CounterAction = CounterActionTypes;

type CounterState = {
  count: number;
};

const initialState: CounterState = {
  count: 0,
};

function reducer(state = initialState, action: CounterAction) {
  switch (action) {
    case CounterActionTypes.ADD:
      return { count: state.count + 1 };
    case CounterActionTypes.SUBSTRACT:
      return { count: state.count + 1 };
    case CounterActionTypes.MULTIPLY:
      return { count: state.count * 2 };
    default:
      return state;
  }
}

export const ReducerHook = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <StyledInput type="text" value={state.count} readOnly />
      <br />
      <StyledButton onClick={() => dispatch(CounterActionTypes.ADD)}>
        Add
      </StyledButton>
      <StyledButton
        onClick={() => dispatch(CounterActionTypes.SUBSTRACT)}
      >
        Substract
      </StyledButton>
      <StyledButton
        onClick={() => dispatch(CounterActionTypes.MULTIPLY)}
      >
        Multiply
      </StyledButton>
    </div>
  );
};
