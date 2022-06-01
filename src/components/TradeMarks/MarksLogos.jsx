import Image from "next/image";
import SliderContainer, { SliderItem } from "./Slider";

const MarksLogos = () => (
	<>
		<SliderContainer className="" contentWidth={1290} initialOffsetX={0}>
			<SliderItem width={160}>
				<Image
					src="/assets/marcas_logos/lenovo-logo.png"
					width={160}
					height={80}
					alt="Lenovo"
					objectFit="contain"
				/>
			</SliderItem>
			<SliderItem width={130}>
				<Image
					src="/assets/marcas_logos/hp-logo.png"
					width={130}
					height={80}
					alt="HP"
					objectFit="contain"
				/>
			</SliderItem>
			<SliderItem width={160}>
				<Image
					src="/assets/marcas_logos/MSI-logo.png"
					width={160}
					height={80}
					alt="MSI"
					objectFit="contain"
				/>
			</SliderItem>
			<SliderItem width={160}>
				<Image
					src="/assets/marcas_logos/aorus-logo.png"
					width={160}
					height={80}
					alt="Aourus"
					objectFit="contain"
				/>
			</SliderItem>
			<SliderItem width={160}>
				<Image
					src="/assets/marcas_logos/gigabyte-logo.png"
					width={160}
					height={80}
					alt="Aourus"
					objectFit="contain"
				/>
			</SliderItem>
			<SliderItem width={160}>
				<Image
					src="/assets/marcas_logos/AMD-logo.png"
					width={160}
					height={80}
					alt="AMD"
					objectFit="contain"
				/>
			</SliderItem>
			<SliderItem width={160}>
				<Image
					src="/assets/marcas_logos/intel-logo.png"
					width={160}
					height={80}
					alt="Intel"
					objectFit="contain"
				/>
			</SliderItem>
		</SliderContainer>
	</>
);

export default MarksLogos;
