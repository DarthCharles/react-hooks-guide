import React, { useEffect, useImperativeHandle, useRef } from 'react';
import styled from 'styled-components';

const StyledInput = styled.input`
  height: 30px;
`;

const StyledButton = styled.button`
  height: 36px;
`;

const NiceInput = React.forwardRef((_props, ref) => {
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.secretValue =
      'This should not be available outside this component';
  }, []);

  useImperativeHandle(ref, () => ({
    focus: () => {
      inputRef.current.style.background = 'red';
      inputRef.current.focus();
    },
    customMethod: () => {
      inputRef.current.value = 'Something nice';
    },
  }));

  return <StyledInput ref={inputRef} type="text" />;
});

export const ImperativeHandleHook = () => {
  const niceInputRef = useRef(null);

  const onClickHandler = () => {
    niceInputRef.current.focus();
    niceInputRef.current.customMethod();
    console.log(niceInputRef.current);
  };

  return (
    <React.Fragment>
      <NiceInput ref={niceInputRef} />
      <StyledButton onClick={onClickHandler}>Click Me</StyledButton>
    </React.Fragment>
  );
};
