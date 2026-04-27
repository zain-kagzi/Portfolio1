import { useContext } from "react";
import { AppContext } from "./context";

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) throw new Error("Context error");
  return context;
};