import React, { useEffect, useRef, useState } from "react";

export const RefHook = () => {
  const renderCountRef = useRef(0);
  const inputRef = useRef(null);

  const [value, setValue] = useState("");
  const [count, setCount] = useState(0);

  // Example of getting re-render count using state
  // useEffect(() => {
  //   console.count("Infinite loop");
  //   setCount((prevCount) => prevCount + 1);
  // });

  // Example of getting re-render count using ref
  useEffect(() => {
    renderCountRef.current = renderCountRef.current + 1;
  });

  const onClickHandler = () => {
    if (inputRef.current) {
      inputRef.current.focus();
      inputRef.current.value = "Some nice value";
    }
  };

  return (
    <div>
      <div>
        I've rendered {renderCountRef.current} times using ref.
      </div>
      <div>I've rendered {count} times</div>
      <br />
      <input
        ref={inputRef}
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button onClick={onClickHandler}>Click me</button>
    </div>
  );
};
