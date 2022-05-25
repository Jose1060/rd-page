import Image from "next/image";

const Solutions = ({ children, img }) => {
	return (
		<div className="flex flex-col">
			<div className="flex-1">
				<Image
					src={img}
					width={300}
					height={300}
					className="rounded-full"
					objectFit="cover"
				/>
			</div>
			<div className="flex-1 my-4">
				<h2 className="text-center text-xl">{children}</h2>
			</div>
		</div>
	);
};

export default Solutions;
