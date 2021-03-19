import { useEffect, useRef, useDebugValue } from "react";

export const useCountRerenders = () => {
  const renders = useRef(0);

  useDebugValue("CountRerenders");

  useEffect(() => {
    console.log(renders.current++);
  });
};
