import Head from "next/head";
import Details from "../components/Areas/Details";
import Empresarial from "../components/Areas/Empresarial";
import InformationAreas from "../components/Areas/InformationAreas";
import MDetails from "../components/Areas/MDetails";
import MDetailsCD from "../components/Areas/MDetailsCD";
import Options from "../components/Areas/Options";
import PageHeader from "../components/PageHeader/PageHeader";

const SSTics = () => {
	const options = [
		{
			id: 0,
			opTitle: "Diseño estructural",
			img: "/assets/Areas_imagenes/TICs/ryd-TICs-img-1.jpg",
		},
		{
			id: 1,
			opTitle: "Gestión de riesgos y sistema de seguridad",
			img: "/assets/Areas_imagenes/TICs/ryd-TICs-img-1.jpg",
		},
		{
			id: 2,
			opTitle: "Migración de red",
			img: "/assets/Areas_imagenes/TICs/img-CD/ryd-TICs-img-CD-MR.jpg",
		},
		{
			id: 3,
			opTitle: "Eficiencia térmica (Aire acondicionado)",
			img: "/assets/Areas_imagenes/TICs/img-CD/ryd-TICs-img-CD-AA.jpg",
		},
		{
			id: 4,
			opTitle: "Cableado Estructurado",
			img: "/assets/Areas_imagenes/TICs/img-CD/ryd-TICs-img-CD-cableado.jpg",
		},
		{
			id: 5,
			opTitle: "Sistema de administración",
			img: "/assets/Areas_imagenes/TICs/img-CD/ryd-TICs-img-CD-SA.jpg",
		},
		{
			id: 6,
			opTitle: "Gabinetes y Racks",
			img: "/assets/Areas_imagenes/TICs/img-CD/ryd-TICs-img-CD-racks2.jpg",
		},
		{
			id: 7,
			opTitle: "Virtualización",
			img: "/assets/Areas_imagenes/TICs/img-CD/ryd-TICs-img-CD-virtualizacion.jpg",
		},
		{
			id: 8,
			opTitle: "Soporte y mantenimiento",
			img: "/assets/Areas_imagenes/TICs/img-CD/ryd-TICs-img-CD-soporte.jpg",
		},
	];

	const opIR = [
		{
			id: 1,
			title: "Redes",
			description:
				"Diseño e implementación de redes LAN/WAN, Core y todo al cual vaya alienado los requerimientos del negocio",
			img: "/assets/Areas_imagenes/TICs/iconos/ryd-gear-icon.svg",
		},
		{
			id: 2,
			title: "Documentacion",
			description: "Auditoría y documentación de la red",
			img: "/assets/Areas_imagenes/TICs/iconos/ryd-gear-icon.svg",
		},
		{
			id: 3,
			title: "Equipos",
			description:
				"Configuración de equipos siguiendo las mejores prácticas de seguridad y eficiencia (Switching , Routing y Wireless)",
			img: "/assets/Areas_imagenes/TICs/iconos/ryd-gear-icon.svg",
		},
		{
			id: 4,
			title: "Cableado",
			description:
				"Cableado estructurado siguiendo lo más alto estándares (Fibra óptica y cobre)",
			img: "/assets/Areas_imagenes/TICs/iconos/ryd-gear-icon.svg",
		},
		{
			id: 5,
			title: "Soporte",
			description:
				"Soporte del más alto nivel, cumpliendo con los tiempos de respuesta acordados con el fin de que tus procesos tengan el mínimo downtime posible y el negocio pueda seguir funcionando",
			img: "/assets/Areas_imagenes/TICs/iconos/ryd-gear-icon.svg",
		},
	];

	const opII = [
		{
			id: 0,
			opTitle: "Estudio de cobertura",
			img: "/assets/Areas_imagenes/TICs/img-II/ryd-TICs-img-II-AC2.jpg",
		},
		{
			id: 1,
			opTitle: "Diseño de la red",
			img: "/assets/Areas_imagenes/TICs/img-II/ryd-TICs-img-II-DR.jpg",
		},
		{
			id: 2,
			opTitle: "Puertos y puntos de acceso",
			img: "/assets/Areas_imagenes/TICs/img-II/ryd-TICs-img-II-PPA.jpg",
		},
		{
			id: 3,
			opTitle: "Switches inalambricos",
			img: "/assets/Areas_imagenes/TICs/img-II/ryd-TICs-img-II-SI.jpg",
		},
		{
			id: 4,
			opTitle: "Software de seguridad y administración de WLAN",
			img: "/assets/Areas_imagenes/TICs/img-II/ryd-TICs-img-II-SS.jpg",
		},
		{
			id: 5,
			opTitle: "Radio Enlace",
			img: "/assets/Areas_imagenes/TICs/img-II/ryd-TICs-img-II-RE.jpg",
		},
	];

	const opIS = [
		{
			id: 1,
			title: "Almacenamiento",
			description: "Servicios de almacenamiento y respaldo de datos",
			img: "/assets/Areas_imagenes/TICs/iconos/ryd-gear-icon.svg",
		},
		{
			id: 2,
			title: "Servicios",
			description:
				"Servicios que permiten prevenir, mitigar y atender incidentes de seguridad.",
			img: "/assets/Areas_imagenes/TICs/iconos/ryd-gear-icon.svg",
		},
		{
			id: 3,
			title: "Automatización",
			description: "Integración de aplicaciones y automatización de procesos",
			img: "/assets/Areas_imagenes/TICs/iconos/ryd-gear-icon.svg",
		},
		{
			id: 4,
			title: "Seguridad",
			description:
				"Seguridad de perímetros de red, aplicaciones y Bases de Datos, sistemas virtualizados, servicios en la nube y servicios móviles.",
			img: "/assets/Areas_imagenes/TICs/iconos/ryd-gear-icon.svg",
		},
		{
			id: 5,
			title: "Conectividad",
			description:
				"Conectividad a internet, enlaces punto a punto y soluciones VPN para interconectar sus sedes",
			img: "/assets/Areas_imagenes/TICs/iconos/ryd-gear-icon.svg",
		},
	];

	return (
		<div>
			<Head>
				<title>R y D</title>
				<meta name="description" content="R y D" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<div>
				<PageHeader
					title="Soluciones y servicios TICs"
					bg={"/assets/videos_header/ryd-bg-TICs.mp4"}>
					Una amplia gama de soluciones para que puedas armar un centro de datos
					que responda rápidamente a las necesidades de cambio, que te permita
					un crecimiento a largo plazo y sea fácilmente administrable.
				</PageHeader>
				<div className="bg-white pb-3">
					<InformationAreas />

					<div className="relative mb-10">
						<div className="bg-gradient-to-b from-viridian-50 to-teal-500 pt-20">
							<MDetailsCD>Detalles con una imagen</MDetailsCD>
							<Details title={"SOLUCIONES"} opOptions={options}>
								Planteamos una gran varied de soluciones, solo consultanos y te
								diremos lo que necesitas
							</Details>
						</div>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 1440 320"
							className="w-full overflow-hidden leading-[0px] fill-teal-500">
							<path
								fillOpacity="1"
								d="M0,256L26.7,224C53.3,192,107,128,160,133.3C213.3,139,267,213,320,234.7C373.3,256,427,224,480,218.7C533.3,213,587,235,640,234.7C693.3,235,747,213,800,192C853.3,171,907,149,960,128C1013.3,107,1067,85,1120,90.7C1173.3,96,1227,128,1280,160C1333.3,192,1387,224,1413,240L1440,256L1440,0L1413.3,0C1386.7,0,1333,0,1280,0C1226.7,0,1173,0,1120,0C1066.7,0,1013,0,960,0C906.7,0,853,0,800,0C746.7,0,693,0,640,0C586.7,0,533,0,480,0C426.7,0,373,0,320,0C266.7,0,213,0,160,0C106.7,0,53,0,27,0L0,0Z"></path>
						</svg>
					</div>

					<Empresarial
						img={"/assets/Areas_imagenes/TICs/ryd-TICs-img-Redes-1.jpg"}
						name={"TIC"}
						title={"Infraestructura y redes"}>
						Ofrecemos soluciones tecnológicas integrales, escalables e
						infraestructura de red convergente
					</Empresarial>
					<Options options={opIR} title={"Soluciones"} />

					<div className="relative">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 1440 320"
							className="w-full overflow-hidden leading-[0px] fill-teal-300">
							<path
								fillOpacity="1"
								d="M0,64L48,80C96,96,192,128,288,149.3C384,171,480,181,576,154.7C672,128,768,64,864,42.7C960,21,1056,43,1152,64C1248,85,1344,107,1392,117.3L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
						</svg>
						<div className="bg-gradient-to-b from-teal-300 to-primary-400">
							<MDetails>Detalles con una imagen</MDetails>
							<Details title={"SOLUCIONES"} opOptions={opII}>
								Tenemos la solucion que estas buscando
							</Details>
						</div>
					</div>

					<Empresarial
						img={"/assets/Areas_imagenes/TICs/ryd-TICs-img-IS-2.jpg"}
						name={"TIC"}
						title={"Integracion de Sistemas"}>
						Planificamos, diseñamos, implementamos y gestionamos soluciones
						tecnológicas informáticas y de telecomunicaciones para estar a la
						altura de las exigencias y necesidades de sus clientes.
					</Empresarial>
					<Options options={opIS} title={"Soluciones"} />
				</div>
			</div>
		</div>
	);
};
export default SSTics;
