import React, { useCallback, useEffect, useState } from "react";
import styled from "styled-components";

const DogContainer = styled.div`
  display: flex;
`;

const MessageContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 10px;
`;

const StyledNextButton = styled.button`
  margin-top: 15px;
`;

const StyledTextArea = styled.textarea`
  height: 255px;
  width: 400px;
`;

const StyledDogPhoto = styled.img`
  height: 300px;
  width: 350px;
`;

const DogPhoto = ({
  fetchDogPhoto,
}: {
  fetchDogPhoto: () => Promise<string>;
}) => {
  const [dogPhoto, setDogPhoto] = useState("");

  useEffect(() => {
    const a = async () => {
      const photo = await fetchDogPhoto();
      setDogPhoto(photo);
    };

    a();
  }, [fetchDogPhoto]);

  return <StyledDogPhoto alt="dog" src={dogPhoto} />;
};

export const CallbackHook = () => {
  const [value, setValue] = useState("");

  // const getRandomDog = async () => {
  //   const response = await fetch(
  //     "https://dog.ceo/api/breeds/image/random",
  //   );
  //   const json = await response.json();
  //   return json.message;
  // };

  const getRandomDog = useCallback(async () => {
    const response = await fetch(
      "https://dog.ceo/api/breeds/image/random",
    );
    const json = await response.json();
    return json.message;
  }, []);

  return (
    <DogContainer>
      <DogPhoto fetchDogPhoto={getRandomDog} />
      <MessageContainer>
        <StyledTextArea
          placeholder="Type something..."
          value={value}
          onChange={(e: any) => setValue(e.target.value)}
        />
        <StyledNextButton>Next Dog</StyledNextButton>
      </MessageContainer>
    </DogContainer>
  );
};
