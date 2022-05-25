import Image from "next/image";
import { useState } from "react";

const OptionsElements = ({ children, img, title }) => {
	const [isHover, setIsHover] = useState(false);

	return (
		<div
			className="border-2 border-primary-400 rounded-xl flex flex-col justify-center items-center hover:border-0 hover:scale-105 hover:bg-gradient-to-b from-green-200 transition-all duration-300 delay-75 ease-in"
			onMouseEnter={(event) => setIsHover(true)}
			onMouseLeave={(event) => setIsHover(false)}>
			<div className="py-3 flex-1 flex justify-center align-middle">
				<Image src={img} alt="icono" width={80} height={80} />
			</div>
			<div className="flex flex-col flex-1 justify-center items-center ">
				<h1
					className={`text-3xl bg-clip-text text-transparent font-bold transition-all duration-100 delay-75 ease-in ${
						isHover
							? " bg-gradient-to-r from-teal-500 to-teal-900"
							: " bg-gradient-to-r from-teal-300 to-teal-500"
					}`}>
					{title}
				</h1>
				<h3 className="text-sm px-5 py-4 text-center">{children}</h3>
			</div>
			<a
				href=""
				className={`w-full  py-4 rounded-b-md text-center text-white transition-all duration-300 ease-in-out hover:bg-gradient-to-r from-teal-300 to-teal-500 min-h-20 ${
					isHover ? "bg-teal-500 visible" : "invisible"
				}`}>
				Consulta
			</a>
		</div>
	);
};

export default OptionsElements;
