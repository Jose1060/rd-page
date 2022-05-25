import Carousel from "./Carousel";
import CarouselItem from "./CarouselItem";
import Review from "./Review";

const Testimonials = () => (
	<Carousel className="bg-turquoise-700 text-turquoise-200 py-10 lg:py-20">
		<CarouselItem index={0}>
			<Review by="Jose">
				Exelentes productos con un exelelente servicio 0
			</Review>
		</CarouselItem>

		<CarouselItem index={1}>
			<Review by="Jose">
				Exelentes productos con un exelelente servicio 1
			</Review>
		</CarouselItem>

		<CarouselItem index={2}>
			<Review by="Jose">
				Exelentes productos con un exelelente servicio 2
			</Review>
		</CarouselItem>

		<CarouselItem index={3}>
			<Review by="Jose">
				Exelentes productos con un exelelente servicio 3
			</Review>
		</CarouselItem>

		<CarouselItem index={4}>
			<Review by="Jose">
				Exelentes productos con un exelelente servicio 4
			</Review>
		</CarouselItem>
	</Carousel>
);

export default Testimonials;
