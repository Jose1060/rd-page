import { EmblaCarouselType } from "embla-carousel-react";
import {
	createContext,
	useEffect,
	useState,
	ReactNode,
	useCallback,
} from "react";
import useEmblaCarousel from "embla-carousel-react";
import ClassNames from "embla-carousel-class-names";
import Autoplay from "embla-carousel-autoplay";
import styles from "../../styles/carousel.module.css";

export const CarouselContext = createContext({
	embla: undefined,
	selectedIndex: -1,
});

const Carousel = ({ children, className }) => {
	const [selectedIndex, setSelectedIndex] = useState(0);
	const [viewportRef, emblaApi] = useEmblaCarousel(
		{
			loop: true,
			align: "center",
			skipSnaps: false,
		},
		[ClassNames(), Autoplay()]
	);

	const onSelect = useCallback(() => {
		console.log("onSelect", emblaApi);
		if (!emblaApi) return;
		setSelectedIndex(emblaApi.selectedScrollSnap());
		console.log(
			"Index",
			selectedIndex,
			"selectedScrollSnap",
			emblaApi.selectedScrollSnap()
		);
	}, [emblaApi, setSelectedIndex]);

	useEffect(() => {
		if (!emblaApi) return;
		onSelect();
		emblaApi.on("select", onSelect);
	}, [emblaApi, onSelect]);

	return (
		<CarouselContext.Provider value={{ embla: emblaApi, selectedIndex }}>
			<div
				ref={viewportRef}
				className={`${styles.viewport} w-full overflow-hidden ${className}`}>
				<div className={` ${styles.container} flex`}>{children}</div>
			</div>
		</CarouselContext.Provider>
	);
};

export default Carousel;
