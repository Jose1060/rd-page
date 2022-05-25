import Head from "next/head";
import Details from "../components/Areas/Details";
import Empresarial from "../components/Areas/Empresarial";
import InformationAreas from "../components/Areas/InformationAreas";
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
			img: "/assets/Areas_imagenes/TICs/ryd-TICs-img-1.jpg",
		},
		{
			id: 3,
			opTitle: "Eficiencia térmica (Aire acondicionado)",
			img: "/assets/Areas_imagenes/TICs/ryd-TICs-img-1.jpg",
		},
		{
			id: 4,
			opTitle: "Cableado Estructurado",
			img: "/assets/Areas_imagenes/TICs/ryd-TICs-img-1.jpg",
		},
		{
			id: 5,
			opTitle: "Sistema de administración",
			img: "/assets/Areas_imagenes/TICs/ryd-TICs-img-1.jpg",
		},
		{
			id: 6,
			opTitle: "Gabinetes y Racks",
			img: "/assets/Areas_imagenes/TICs/ryd-TICs-img-1.jpg",
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

	const options2 = [
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
					<Details title={"CENTROS DE DATOS"} opOptions={options}>
						Una amplia gama de soluciones para que puedas armar un centro de
						datos que responda rápidamente a las necesidades de cambio, que te
						permita un crecimiento a largo plazo y sea fácilmente administrable.
					</Details>
					<Empresarial
						img={"/assets/Areas_imagenes/TICs/ryd-TICs-img-Redes-1.jpg"}
						name={"TIC"}
						title={"Infraestructura y redes"}>
						Ofrecemos soluciones tecnológicas integrales, escalables e
						infraestructura de red convergente
					</Empresarial>
					<Options options={options2} title={"Soluciones"} />
				</div>
			</div>
		</div>
	);
};
export default SSTics;
