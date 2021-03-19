import React, { useEffect, useState } from "react";
import styled from "styled-components";

const DogContainer = styled.div`
  display: flex;
`;

const DogPhotoContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const MessageContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 10px;
  padding-top: 60px;
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

export const EffectHook = () => {
  const [value, setValue] = useState("");
  const [dogPhoto, setDogPhoto] = useState("");
  const [nextPhoto, setNextPhoto] = useState(1);

  useEffect(() => {
    const fetchDogPhoto = async () => {
      const response = await fetch(
        "https://dog.ceo/api/breeds/image/random",
      );
      const json = await response.json();

      setDogPhoto(json.message);
    };

    fetchDogPhoto();
  }, [nextPhoto]);

  return (
    <DogContainer>
      {dogPhoto && (
        <DogPhotoContainer>
          <h4>Dog #{nextPhoto}</h4>
          <StyledDogPhoto alt="dog" src={dogPhoto} />
        </DogPhotoContainer>
      )}
      <MessageContainer>
        <StyledTextArea
          placeholder="Type something..."
          value={value}
          onChange={(e: any) => setValue(e.target.value)}
        />
        <StyledNextButton
          onClick={() => setNextPhoto((prev) => prev + 1)}
        >
          Next Dog
        </StyledNextButton>
      </MessageContainer>
    </DogContainer>
  );
};
