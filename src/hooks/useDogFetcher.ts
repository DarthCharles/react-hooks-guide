import { useEffect, useState } from "react";

export const useDogFetcher = () => {
  const [dogPhoto, setDogPhoto] = useState("");

  useEffect(() => {
    const fetchDogPhoto = async () => {
      const response = await fetch(
        "https://dog.ceo/api/breeds/image/random",
      );
      const json = await response.json();

      setDogPhoto(json.message);
    };

    fetchDogPhoto();
  }, []);

  return { dogPhoto };
};
