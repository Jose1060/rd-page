import Image from "next/image";

const Empresarial = ({ children, img, name, title }) => {
	return (
		<div className="flex relative">
			<div className="w-full relative h-[100vh] md:h-[100vh]">
				<Image
					src={img}
					alt={name}
					className="w-full absolute right-0"
					objectFit="cover"
					layout="fill"
					priority
				/>
			</div>
			<div className="flex flex-col justify-center items-center z-10 absolute py-5 px-4 right-0 h-[100vh] md:h-[100vh] w-[90%] md:w-[50%] bg-gradient-to-l from-green-200 via-teal-300 transition-all ease-in-out delay-150 hover:w-[100%] md:hover:w-[70%] duration-300">
				<h1 className="text-white text-8xl text-center font-bold font- py-20">
					{title}
				</h1>
				<div className="bg-white">
					<h2 className="py-10 px-20 text-center text-3xl bg-clip-text text-transparent bg-gradient-to-r from-teal-500 to-violet-500 border-2 font-semibold">
						{children}
					</h2>
				</div>
			</div>
		</div>
	);
};

export default Empresarial;
