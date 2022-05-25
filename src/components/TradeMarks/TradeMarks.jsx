import Testimonials from "../Testimonials/Testimonials";
import MarksLogos from "./MarksLogos";
import style from "../../styles/tradeMarks.module.css";

const TradeMarks = () => {
	return (
		<section
			className={`bg-turquoise-50 min-h-screen flex flex-col justify-center md:gap-32 gap-16 ${style.bg}`}>
			<div className="flex-1"></div>
			<div className="flex flex-col justify-center items-center">
				<h3 className="text-xl mb-10 font-bold text-center">
					<span className="whitespace-nowrap">Marcas</span>
					<span className="whitespace-nowrap">
						Algunas marcas que tenemos disponible
					</span>
				</h3>
				<MarksLogos />
			</div>
			<div className="flex flex-col justify-center items-center">
				<div className="container mx-auto lg:max-w-[70%] lg:px-10">
					<h3 className="text-3xl lg:text-4xl tracking-thight text-center px-10 !leading-[3.5rem]">
						Tenemos los productos que tu o tu empresa necesitan
					</h3>
				</div>
			</div>
			<Testimonials />
			<div className="flex-1 bg-turquoise-700"></div>
		</section>
	);
};

export default TradeMarks;
