import Carousel from "./Carousel";
import CarouselItem from "./CarouselItem";
import Solutions from "./Solutions";

const Details = ({ children, title, opOptions }) => {
	return (
		<div className="py-20">
			<h1 className="text-3xl text-primary-900 text-center py-10">{title}</h1>
			<div className="px-5 text-xl text-center text-primary-600">
				<p>{children}</p>
			</div>
			<div>
				<Carousel className="py-20 lg:py-20">
					{opOptions.map((item) => {
						return (
							<CarouselItem key={item.id} index={item.id}>
								<Solutions img={item.img}>{item.opTitle}</Solutions>
							</CarouselItem>
						);
					})}
				</Carousel>
			</div>
		</div>
	);
};

export default Details;
