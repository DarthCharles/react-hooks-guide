import { useEffect, useRef, useDebugValue } from 'react';

export const useCountRerenders = () => {
  const renders = useRef(0);

  useDebugValue(`CountRerenders: ${renders.current}`);

  useEffect(() => {
    console.log(`Rerender: ${renders.current++}`);
  });
};
