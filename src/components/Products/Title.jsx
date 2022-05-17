import React, { createContext, useContext, useRef } from "react";
import { ScrollContext } from "../../../utils/scroll-observer";

export const TitleContext = createContext({
	numOfPages: 0,
	currentPage: 0,
});

export const TitleWrapper = ({ children, numOfPages }) => {
	const refContainer = useRef(null);
	const { scrollY } = useContext(ScrollContext);
	let currentPage = 0;

	const { current: elContainer } = refContainer;
	if (elContainer) {
		const { clientHeight, offsetTop } = elContainer;
		const screenH = window.innerHeight;
		const halfH = screenH / 2;
		const percentY =
			Math.min(
				clientHeight + halfH,
				Math.max(-screenH, scrollY - offsetTop) + halfH
			) / clientHeight;
		currentPage = percentY * numOfPages;
	}

	return (
		<TitleContext.Provider value={{ numOfPages, currentPage }}>
			<div
				ref={refContainer}
				className="relative bg-turquoise-700 text-turquoise-300"
				style={{
					height: numOfPages * 100 + "vh",
				}}>
				{children}
			</div>
		</TitleContext.Provider>
	);
};

export const TitleBackground = ({ children }) => (
	<div className="absolute h-full w-full">{children}</div>
);

export const TitleContent = ({ children }) => (
	<div className="sticky top-0 h-screen overflow-hidden">{children}</div>
);

export const Title = ({ page, renderContent }) => {
	const { currentPage, numOfPages } = useContext(TitleContext);

	const refContainer = useRef(null);
	const progress = Math.max(0, currentPage - page);

	let opacity = Math.min(1, Math.max(0, progress * 4));
	if (progress > 0.85 && page < numOfPages - 1) {
		opacity = Math.max(0, (1.0 - progress) * 4);
	}

	return (
		<div
			ref={refContainer}
			className="absolute top-0 w-full"
			style={{
				pointerEvents: progress <= 0 || progress >= 1 ? "none" : undefined,
				opacity,
			}}>
			{renderContent({ progress })}
		</div>
	);
};
