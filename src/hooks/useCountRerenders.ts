import { useEffect, useRef } from "react";

export const useCountRerenders = () => {
  const renders = useRef(0);

  useEffect(() => {
    console.log(renders.current++);
  });
};
