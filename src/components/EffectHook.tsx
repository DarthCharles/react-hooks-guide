import React, { useEffect, useState } from "react";

export const EffectHook = () => {
  const [randomDog, setRandomDog] = useState("");
  const [fetchNew, setFetchNew] = useState(true);

  useEffect(() => {
    console.log("I render");

    return () => {
      console.log("Im gone");
    };
  });

  useEffect(() => {
    if (fetchNew) {
      fetch("https://dog.ceo/api/breeds/image/random")
        .then((response) => response.json())
        .then((json) => {
          setFetchNew(false);
          setRandomDog(json.message);
        });
    }
  }, [fetchNew]);

  const handleClick = () => {
    setFetchNew(true);
  };

  return (
    <div>
      <button onClick={handleClick}>Click Me</button>
      <br />
      {randomDog && (
        <img style={{ width: 300 }} alt="dog" src={randomDog} />
      )}
    </div>
  );
};
