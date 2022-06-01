import Image from "next/image";

const Empresarial = ({ children, img, name, title }) => {
	return (
		<div className="flex relative min-h-screen">
			<div className="w-full relative min-h-screen">
				<Image
					src={img}
					alt={name}
					className="w-full absolute right-0"
					objectFit="cover"
					layout="fill"
					priority
				/>
			</div>
			<div className="flex flex-col justify-center absolute py-5 px-10 right-0 bottom-0 h-[100vh] lg:h-[100vh] w-full lg:w-[70%] bg-gradient-to-t lg:bg-gradient-to-l from-green-200 via-teal-300 transition-all ease-in-out delay-150 lg:hover:w-[90%] duration-300">
				<h1 className="text-white lg:text-7xl text-5xl text-center font-bold font- py-20 px-10">
					{title}
				</h1>
				<div className="bg-white">
					<h2 className="py-10 px-20 text-center lg:text-3xl text-2xl bg-clip-text text-transparent bg-gradient-to-r from-teal-500 to-violet-500 border-2 font-semibold">
						{children}
					</h2>
				</div>
			</div>
		</div>
	);
};

export default Empresarial;
