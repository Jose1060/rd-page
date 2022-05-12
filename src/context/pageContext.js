import { createContext, useContext } from "react";

export const PageContext = createContext();

export const usePageContext = () => useContext(PageContext);

export const PageProvider = ({ children }) => {
	let hello = "world";
	return (
		<PageContext.Provider value={{ hello }}>{children}</PageContext.Provider>
	);
};
