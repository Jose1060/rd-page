import Image from "next/image";

const Solutions = ({ children, img }) => {
	return (
		<div className="flex flex-col transition ease-in-out delay-150 duration-300 hover:-translate-y-1 hover:scale-110 hover:border-b-8">
			<div className="flex-1">
				<Image
					src={img}
					width={300}
					height={300}
					className="rounded-full"
					objectFit="cover"
				/>
			</div>
			<div className="flex-1 my-4 justify-center flex">
				<h2 className="text-center text-2xl max-w-[31vh]">{children}</h2>
			</div>
		</div>
	);
};

export default Solutions;
