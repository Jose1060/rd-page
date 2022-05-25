import { useState, useCallback } from "react";
import Image from "next/image";

const ContactUs = () => {
	return (
		<div className="bg-turquoise-700 text-white flex flex-col justify-center pt-10 min-h-screen">
			<div className="flex-1 flex flex-col justify-center items-center pt-10 lg:pt-6">
				<div className="pb-10">
					<Image
						src="/assets/svg/ryd-logo.svg"
						width={80}
						height={80}
						alt="logo"
					/>
				</div>
				<h2 className="text-4xl font-bold">Contactanos</h2>
				<form className="flex flex-col gap-4 mt-16 px-10 lg:mt-20 min-w-full lg:min-w-[500px]">
					<input
						type="text"
						id="nombre"
						name="nombre"
						required
						maxLength={128}
						placeholder="Nombre"
						className="bg-turquoise-700 text-white outline-none border-2 border-white rounded-3xl px-8 py-2"
					/>
					<input
						type="email"
						id="email"
						name="email"
						required
						maxLength={128}
						placeholder="Tu correo electronico"
						className="bg-turquoise-700 text-white outline-none border-2 border-white rounded-3xl px-8 py-2"
					/>
					<textarea
						id="mensaje"
						name="mensaje"
						required
						maxLength={1048576}
						placeholder="Informacion adicional"
						className="bg-turquoise-700 text-white outline-none border-2 border-white rounded-3xl px-8 py-2 min-h-[16rem]"></textarea>
					<div className="text-center mt-10">
						<button
							type="submit"
							className="bg-white text-turquoise-700 rounded-3xl px-8 py-2">
							Enviar
						</button>
					</div>
				</form>
			</div>
		</div>
	);
};

export default ContactUs;
