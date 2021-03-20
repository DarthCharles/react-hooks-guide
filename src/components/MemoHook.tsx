import React, { useMemo, useState } from 'react';
import styled from 'styled-components';

import { getRandomNumber } from '../utils';
import { useCountRerenders } from '../hooks';

const Container = styled.div``;

const MathContainer = styled.div`
  display: flex;
`;

const RandomContainer = styled.div`
  align-items: center;
  display: flex;
  flex: 1;
  flex-direction: column;
`;

const FibonacciContainer = styled.div`
  flex: 2;
`;

const FibonacciListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding-left: 25px;
  margin-right: 30px;
`;

const StyledInput = styled.input`
  height: 40px;
  width: 60px;
`;

const fibonacci = (num: number): number => {
  if (num < 2) {
    return num;
  } else {
    return fibonacci(num - 1) + fibonacci(num - 2);
  }
};

const getFibonacciNumbers = (number: number) => {
  let res = [];

  for (let i = 0; i < number; i++) {
    res.push(fibonacci(i));
  }

  return res;
};

export const MemoHook = () => {
  const [count, setCount] = useState(0);
  const [num, setNum] = useState(30);

  useCountRerenders();

  const numbers = useMemo(() => getFibonacciNumbers(num), [num]);
  // const numbers = getFibonacciNumbers(num);

  return (
    <Container>
      <MathContainer>
        <RandomContainer>
          <h4>Random Number</h4>
          <div style={{ display: 'flex' }}>
            <StyledInput type="text" value={count} readOnly={true} />
            <button onClick={() => setCount(getRandomNumber())}>
              Get Random!
            </button>
          </div>
        </RandomContainer>
        <FibonacciContainer>
          <h4>Fibonacci Series</h4>
          <div style={{ display: 'flex' }}>
            <StyledInput
              type="number"
              value={num}
              onChange={(e: any) =>
                setNum(parseInt(e.target.value, 10))
              }
            />
            <FibonacciListContainer>
              {numbers.map((number, index) => (
                <div
                  style={{ paddingRight: 10 }}
                  key={`index_${index}`}
                >
                  {number}
                </div>
              ))}
            </FibonacciListContainer>
          </div>
        </FibonacciContainer>
      </MathContainer>
    </Container>
  );
};
