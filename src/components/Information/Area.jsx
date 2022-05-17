import Image from "next/image";
import Link from "next/link";

const AreaInformation = (props) => {
	console.assert(props);

	return (
		<div>
			<Image
				src={`/assets/svg/information-icons/${props.logo}`}
				alt={props.name}
				width={1336}
				height={1555}
			/>
			<div className="text-2xl xl:text-3xl">{props.name}</div>
			<div className="text-xl">
				<Link href={props.link}>
					<a
						target="_blank"
						className="underline underline-offset-8 decoration-1 transition-all duration-1000 hover:text-navy-400">
						Ver más
					</a>
				</Link>
			</div>
		</div>
	);
};

export default AreaInformation;
