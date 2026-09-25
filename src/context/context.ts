import { createContext } from "react";
import type { PortfolioData } from "../data/portfolioData";

type AppContextType = {
  portfolioData: PortfolioData;
};

export const AppContext = createContext<AppContextType | null>(null);