import React, { useContext, useState } from "react";
import styled from "styled-components";

import { translations, availableLocales } from "../utils";

const StyledContainer = styled.div`
  font-size: 36px;
`;

const StyledSelect = styled.select`
  width: 100px;
  height: 32px;
  margin-bottom: 20px;
`;

export const Context = React.createContext<{
  name: string;
  locale: string;
  setLocale: (locale: string) => void;
}>({
  name: "",
  locale: "en-US",
  setLocale: () => null,
});

const GreetingComponent = () => {
  const { name, locale } = useContext(Context);
  return (
    <div>
      {translations[locale].replace(/{name}/g, name)}
      <span role="img" aria-label="hand wave emoji">
        👋
      </span>
    </div>
  );
};

const NestedContainer2 = () => (
  <div>
    <GreetingComponent />
  </div>
);

const NestedContainer = () => (
  <div>
    <NestedContainer2 />
  </div>
);

const Container = () => {
  const { setLocale } = useContext(Context);

  return (
    <StyledContainer>
      <StyledSelect onChange={(e: any) => setLocale(e.target.value)}>
        {availableLocales.map((locale) => (
          <option key={locale} value={locale}>
            {locale}
          </option>
        ))}
      </StyledSelect>
      <NestedContainer />
    </StyledContainer>
  );
};

export const ContextHook = () => {
  const [selectedLocale, setSelectedLocale] = useState("en-US");

  return (
    <Context.Provider
      value={{
        name: "Carlos",
        locale: selectedLocale,
        setLocale: setSelectedLocale,
      }}
    >
      <Container />
    </Context.Provider>
  );
};
