import { createContext, useContext } from "react";

export const queryContext = createContext();

export const useQuery = () => useContext(queryContext);
