import { useEffect, useLayoutEffect, useState } from "react";

import { emojis } from "../utils";

import { HookName } from "./HookName";

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
    fetch("https://dog.ceo/api/breeds/image/random")
      .then((response) => response.json())
      .then((json) => setRandomDog(json.message));
  }, []);

  const handleClick = () => {
    setFetchNew(true);
  };

  return (
    <div>
      <HookName name="useEffect" />
      <button onClick={handleClick}>Click Me</button>
      <br />
      <img style={{ width: 300 }} alt="dog" src={randomDog} />
    </div>
  );
};
