import { AppContext } from "./context";

import portfolioData from "../data/portfolioData"


export const AppProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <AppContext.Provider value={{ portfolioData }}>
      {children}
    </AppContext.Provider>
  );
};
