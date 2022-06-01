import AreaInformation from "./Area";

const Information = () => {
	const areas = [
		{
			id: "1",
			name: "Soluciones y Servicios TICs",
			logo: "ryd-sst-logo.svg",
			link: "/soluciones_servicios_TICs",
		},
		{
			id: "2",
			name: "Soluciones de Software",
			logo: "ryd-ss-logo.svg",
			link: "/soluciones_servicios_TICs",
		},
		{
			id: "3",
			name: "Seguridad Electronica",
			logo: "ryd-se-logo.svg",
			link: "/soluciones_servicios_TICs",
		},
		{
			id: "4",
			name: "Soluciones y Servicios electricos",
			logo: "ryd-sse-logo.svg",
			link: "/soluciones_servicios_TICs",
		},
		{
			id: "5",
			name: "Venta de equipos y accesorios de computo y telecomunicaciones",
			logo: "ryd-veat-logo.svg",
			link: "/soluciones_servicios_TICs",
		},
	];

	return (
		<section
			className={`flex flex-col bg-turquoise-100 py-20 text-3xl md:text-4xl rounded-3xl mx-0 md:mx-10 drop-shadow-2xl

			`}>
			<div className="container mx-auto px-11 z-50">
				<p className="leading-tight max-w-5xl mx-auto text-4xl tracking-thight">
					Somos una empresa dedicada a dar{" "}
					<strong className="text-turquoise-800">
						{" "}
						soluciones y servicios de tecnologías de información y
						comunicaciones, servicios eléctricos y seguridad electrónica ;{" "}
					</strong>
					así mismo como la de administración de proyectos y procesos de
					negocio, de una forma diferente y versátil, así mismo proveer la
					educación y entrenamiento en cada una de sus áreas de negocio
				</p>
				<div className="container mx-auto px-11 text-center mt-28">
					<h2 className="border-b-4 border-viridian-400 pb-7">
						Areas de Negocio
					</h2>
					<div className="justify-center mt-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-10 lg:gap-20">
						{areas.map((area) => (
							<AreaInformation
								key={area.id}
								name={area.name}
								logo={area.logo}
								link={area.link}
							/>
						))}
					</div>
				</div>
			</div>
		</section>
	);
};

export default Information;
