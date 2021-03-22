import React, { useCallback, useEffect, useState } from 'react';
import styled from 'styled-components';

import { getRandomNumber, emojis as emojiList } from '../utils';
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

const EmojiList = React.memo(
  ({ onEmojiClick }: { onEmojiClick: (e: any) => void }) => {
    const [emojis, setEmojis] = useState([]);
    useCountRerenders();

    useEffect(() => {
      const getEmojis = () => {
        let result = [];
        for (let i = 0; i < 1000; i++) {
          result.push(emojiList[getRandomNumber(emojiList.length)]);
        }

        return result;
      };

      setEmojis(getEmojis());
    }, []);

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

  // const onEmojiClick = (event: any) => {
  //   console.log('You clicked ', event.currentTarget);
  // };

  const onEmojiClick = useCallback((event: any) => {
    console.log('You clicked ', event.currentTarget);
  }, []);

  return (
    <Container>
      <ActionsContainer>
        <StyledButton onClick={() => setCount((c) => c + 1)}>
          Change State
        </StyledButton>
      </ActionsContainer>
      <EmojiList onEmojiClick={onEmojiClick} />
    </Container>
  );
};
