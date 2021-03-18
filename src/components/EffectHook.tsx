import React, { useEffect, useState } from "react";

export const EffectHook = () => {
  const [randomDog, setRandomDog] = useState("");
  const [shouldFetchNew, setshouldFetchNew] = useState(true);

  useEffect(() => {
    console.log("I render");

    return () => {
      console.log("Im gone");
    };
  });

  useEffect(() => {
    if (shouldFetchNew) {
      fetch("https://dog.ceo/api/breeds/image/random")
        .then((response) => response.json())
        .then((json) => {
          setshouldFetchNew(false);
          setRandomDog(json.message);
        });
    }
  }, [shouldFetchNew]);

  const onClickHandler = () => {
    setshouldFetchNew(true);
  };

  return (
    <div>
      <button onClick={onClickHandler}>
        Random{" "}
        <span role="img" aria-label="dog">
          🐶
        </span>
      </button>
      <br />
      {randomDog && (
        <img style={{ width: 300 }} alt="dog" src={randomDog} />
      )}
    </div>
  );
};
