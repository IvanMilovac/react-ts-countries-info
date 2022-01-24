import React, { createContext, useReducer, ReactNode } from "react";

type AppState = typeof initialState;
type Action = {
  type: "SET_COUNTRIES";
  payload: Country[];
};

interface IProviderProps {
  children: ReactNode;
}

const initialState = {
  countries: [] as Country[],
};

const reducer = (state: AppState, action: Action) => {
  switch (action.type) {
    case "SET_COUNTRIES":
      return { countries: [...action.payload] };
    default:
      return state;
  }
};

const CountryContext = createContext<{
  state: AppState;
  dispatch: React.Dispatch<Action>;
}>({ state: initialState, dispatch: () => {} });

function CountryContextProvider({ children }: IProviderProps) {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <CountryContext.Provider value={{ state, dispatch }}>
      {children}
    </CountryContext.Provider>
  );
}

export { CountryContext, CountryContextProvider };
