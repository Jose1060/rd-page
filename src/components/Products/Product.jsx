import Link from "next/link";

export const ProductContainer = ({ children }) => (
	<div className="grid grid-cols-1 lg:grid-cols-2 w-full min-h-scroll">
		{children}
	</div>
);

export const ProductBackground = () => (
	<div className="grid grid-cols-1 lg:grid-cols-2 w-full min-h-screen top-0 sticky">
		<div className="bg-turquoise-700 h-[30vh] lg:h-auto"></div>
		<div className="bg-turquoise-300 h-[70vh] lg:min-h-screen"></div>
	</div>
);

export const ProductLeft = ({ children, progress }) => {
	let translateY = Math.max(0, 50 - progress * 3 * 50);
	if (progress > 0.85) translateY = Math.max(-50, -(progress - 0.85) * 2 * 50);
	return (
		<div
			className="flex flex-col items-center justify-center text-3xl lg:text-3xl h-[30vh] lg:h-auto"
			style={{
				transform: `translateY(${translateY}px)`,
			}}>
			<div className="leading-10">{children}</div>
		</div>
	);
};

export const ProductRight = ({ children, progress }) => {
	let translateY = Math.max(-50, -(progress - 0.5) * 50);
	return (
		<div
			className="flex flex-1 lg:items-center justify-center h-screen align-middle"
			styles={{
				transform: `translateY(${translateY}px)`,
			}}>
			<div className="w-full h-full">{children}</div>
		</div>
	);
};

export const ProductLink = ({ children, href }) => (
	<Link href={href}>
		<a
			target="_blank"
			rel="roreferrer"
			className="underline underline-offset-8 decoration-1 transition-all duration-1000 hover:text-navy-400">
			{children}
		</a>
	</Link>
);
