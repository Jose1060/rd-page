import Image from "next/image";
import axios from "axios";
import { useCallback, useState } from "react";

const ContactUs = () => {
	const [status, setStatus] = useState({
		submitted: false,
		submitting: false,
		info: { error: false, msg: null },
	});

	const [inputs, setInputs] = useState({
		nombre: "",
		email: "",
		mensaje: "",
	});

	const handleOnChange = useCallback((e) => {
		e.persist();
		setInputs((prev) => ({
			...prev,
			[e.target.id]: e.target.value,
		}));
		setStatus({
			submitted: false,
			submitting: false,
			info: { error: false, msg: null },
		});
	}, []);

	const handleServerResponse = useCallback((ok, msg) => {
		if (ok) {
			setStatus({
				submitted: true,
				submitting: false,
				info: { error: false, msg },
			});
			setInputs({
				nombre: "",
				email: "",
				mensaje: "",
			});
		} else {
			setStatus({
				submitted: false,
				submitting: false,
				info: { error: true, msg },
			});
		}
	}, []);

	const handleSubmit = useCallback((e) => {
		e.preventDefault();
		setStatus((prevStatus) => ({ ...prevStatus, submitting: true }));
		axios({
			method: "POST",
			url: process.env.NEXT_PUBLIC_CONTACT_FORM_ENDPOINT_URL,
			data: inputs,
		}).then((_response) => {
			handleServerResponse(
				true,
				"Gracias por contactarnos, tu mensaje fue enviado con exito"
			);
		});
	});

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
				<form
					onSubmit={handleSubmit}
					className="flex flex-col gap-4 mt-16 px-10 lg:mt-20 min-w-full lg:min-w-[500px]">
					{status.info.error && (
						<div
							className="bg-red-100 border-red-400 text-red-700 px-4 py-3 rounded relative"
							role="alert">
							<strong className="fonr-bold">Error</strong>
							{"  "}
							<span className="block sm:inline">{status.info.msg}</span>
						</div>
					)}
					{status.submitted ? (
						<div
							className="text-white text-xl font-bold px-4 py-3 rounded relative text-center"
							role="alert">
							Tu mensaje fue enviado satisfactoriamente. Pronto nos
							contactaremos contigo
						</div>
					) : (
						<>
							<input
								type="text"
								id="nombre"
								name="nombre"
								required
								maxLength={128}
								placeholder="Nombre"
								className="bg-turquoise-700 text-white outline-none border-2 border-white rounded-3xl px-8 py-2"
								onChange={handleOnChange}
								value={inputs.nombre}
							/>
							<input
								type="email"
								id="email"
								name="email"
								required
								maxLength={128}
								placeholder="Tu correo electronico"
								className="bg-turquoise-700 text-white outline-none border-2 border-white rounded-3xl px-8 py-2"
								onChange={handleOnChange}
								value={inputs.email}
							/>
							<textarea
								id="mensaje"
								name="mensaje"
								required
								maxLength={1048576}
								placeholder="Informacion adicional"
								className="bg-turquoise-700 text-white outline-none border-2 border-white rounded-3xl px-8 py-2 min-h-[16rem]"
								onChange={handleOnChange}
								value={inputs.mensaje}></textarea>
							<div className="text-center mt-10">
								<button
									type="submit"
									className="bg-white text-turquoise-700 rounded-3xl px-8 py-2">
									{!status.submitting
										? !status.submitted
											? "Enviar"
											: "Enviado"
										: "Enviando..."}
								</button>
							</div>
						</>
					)}
				</form>
			</div>
		</div>
	);
};

export default ContactUs;
