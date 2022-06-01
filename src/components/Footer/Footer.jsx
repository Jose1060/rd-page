import Image from "next/image";
import Link from "next/link";

const Footer = () => {
	return (
		<footer className="flex gap-8 items-center justify-center bg-primary-800 text-white p-20">
			<Image src="/assets/svg/ryd-logo.svg" width={60} height={60} alt="logo" />
			<Link href="/terms">Terminos</Link>
			<Link href="/privacy">Politicas de Privacidad</Link>
		</footer>
	);
};

export default Footer;
