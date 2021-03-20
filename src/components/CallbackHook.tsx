import React, { useCallback, useEffect, useState } from 'react';
import styled from 'styled-components';

import { getRandomNumber, emojis } from '../utils';
import { useCountRerenders } from '../hooks';

const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const ActionsContainer = styled.div`
  display: flex;
`;

const EmojiListContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
  padding-top: 40px;
  flex-wrap: wrap;
`;

const StyledEmoji = styled.button`
  font-size: 44px;
`;

const StyledButton = styled.button`
  height: 45px;
  width: 100px;
`;

const StyledInput = styled.input`
  height: 40px;
  width: 100px;
`;

const EmojiList = React.memo(
  ({
    getEmojis,
    onEmojiClick,
  }: {
    getEmojis: any;
    onEmojiClick: any;
  }) => {
    const [emojis, setEmojis] = useState([]);
    useCountRerenders();

    useEffect(() => {
      setEmojis(getEmojis);
    }, [getEmojis]);

    return (
      <EmojiListContainer>
        {emojis.map((emoji: string, index: number) => (
          <StyledEmoji onClick={onEmojiClick} key={`e_${index}`}>
            {emoji}
          </StyledEmoji>
        ))}
      </EmojiListContainer>
    );
  },
);

export const CallbackHook = () => {
  const [, setCount] = useState(0);
  const [value, setValue] = useState(10);

  const onEmojiClick = useCallback((event: any) => {
    console.log('You clicked ', event.currentTarget);
  }, []);


  const getEmojis = useCallback(() => {
    let result = [];
    for (let i = 0; i < value; i++) {
      result.push(emojis[getRandomNumber(emojis.length)]);
    }

    return result;
  }, [value]);

  return (
    <Container>
      <ActionsContainer>
        <StyledInput
          type="number"
          value={value}
          onChange={(e: any) =>
            setValue(parseInt(e.target.value, 10))
          }
        />

        <StyledButton onClick={() => setCount((c) => c + 1)}>
          Change State
        </StyledButton>
      </ActionsContainer>
      <EmojiList getEmojis={getEmojis} onEmojiClick={onEmojiClick} />
    </Container>
  );
};
