import { ScrollContext } from "../../../utils/scroll-observer";
import style from "../../styles/capacities.module.css";
import { useContext, useRef } from "react";

const opacityForBlock = (sectionProgress, blockNo) => {
	const progress = sectionProgress - blockNo;
	if (progress >= 0 && progress < 1) return 1;
	return 0.2;
};

const Capacities = () => {
	const { scrollY } = useContext(ScrollContext);
	const refContainer = useRef(null);
	const numOfPages = 4;
	let progress = 0;

	const { current: elContainer } = refContainer;
	if (elContainer) {
		const { clientHeight, offsetTop } = elContainer;
		const screenH = window.innerHeight;
		const halfH = screenH / 2;
		const percentY =
			Math.min(
				clientHeight + halfH,
				Math.max(-screenH, scrollY - offsetTop) + halfH
			) / clientHeight;
		progress = Math.min(numOfPages - 0.5, Math.max(0.5, percentY * numOfPages));
	}

	return (
		<div ref={refContainer} className="bg-turquoise-700 text-turquoise-300">
			<div className="min-h-screen max-w-5xl mx-auto px-10 lg:px-20 py-24 md:py-28 lg:py-36 flex flex-col justify-center items-center text-4xl md:text-6xl lg:text-7xl tracking-tight font-semibold">
				<div className="leading-[1.15]">
					<div
						className={style.capacityText}
						style={{
							opacity: opacityForBlock(progress, 0),
						}}>
						Nuestra Capacidades
					</div>
					<span
						className={`${style.capacityText} inline-block after:content-['_']`}
						style={{
							opacity: opacityForBlock(progress, 1),
						}}>
						Proporcionar servicio y satisfacer las necesidades del cliente
						respecto al tratamiento y gestión de la información y las
						comunicaciones.
					</span>
					<span
						className={`${style.capacityText} inline-block`}
						style={{
							opacity: opacityForBlock(progress, 2),
						}}>
						Mejorar las oportunidades del cliente optimizando la gestión de
						talento humano y gestión de procesos.
					</span>
					<span
						className={`${style.capacityText} inline-block`}
						style={{
							opacity: opacityForBlock(progress, 3),
						}}>
						Asesorar estratégicamente en la visión de nuevos proyectos que las
						empresas y entidades públicas pretenden asumir dentro de un marco
						legal y genuino.
					</span>
				</div>
			</div>
		</div>
	);
};

export default Capacities;
