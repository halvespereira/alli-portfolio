import React, { createContext, useState } from "react";

export const StateContext = createContext(undefined);
export const StateDispatchContext = createContext(undefined);

export const StateProvider = ({ children }) => {
  const [state, setState] = useState({});

  return (
    <StateContext.Provider value={state}>
      <StateDispatchContext.Provider value={setState}>
        {children}
      </StateDispatchContext.Provider>
    </StateContext.Provider>
  );
};
