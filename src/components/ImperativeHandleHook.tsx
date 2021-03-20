import React, { useEffect, useImperativeHandle, useRef } from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  height: 36px;
`;

const NiceButton = React.forwardRef(
  ({ onClick }: { onClick: () => void }, ref) => {
    const buttonRef = useRef(null);

    useEffect(() => {
      buttonRef.current.secretValue =
        'This should not be available outside this component';
    }, []);

    useImperativeHandle(ref, () => ({
      focus: () => {
        console.log('Enhanced Focus');
        buttonRef.current.focus();
      },
      click: () => {
        alert('Extending');
      },
    }));

    return (
      <StyledButton ref={buttonRef} onClick={onClick}>
        Click me
      </StyledButton>
    );
  },
);

export const ImperativeHandleHook = () => {
  const buttonRef = useRef(null);

  const onClickHandler = () => {
    console.log(buttonRef.current);
  };

  return <NiceButton onClick={onClickHandler} ref={buttonRef} />;
};
