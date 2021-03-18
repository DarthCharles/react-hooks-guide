import React, { useRef } from "react";

export const RefHook = () => {
  const inputRef = useRef(null);

  const onClickHandler = () => {
    if (inputRef.current) {
      inputRef.current.focus();
      inputRef.current.value = "Some nice value";
    }
  };

  return (
    <div>
      <input ref={inputRef} type="text" />
      <button onClick={onClickHandler}>Click me</button>
    </div>
  );
};
