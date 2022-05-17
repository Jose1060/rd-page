import React from "react";
import {
	ProductBackground,
	ProductContainer,
	ProductLeft,
	ProductLink,
	ProductRight,
} from "./Product";
import { Title, TitleBackground, TitleContent, TitleWrapper } from "./Title";
import Image from "next/image";

const Products = () => (
	<TitleWrapper numOfPages={5}>
		<TitleBackground>
			<ProductBackground />
		</TitleBackground>
		<TitleContent>
			<Title
				page={0}
				renderContent={({ progress }) => (
					<ProductContainer>
						<ProductLeft progress={progress}>
							<div>Tenemos</div>
							<div className="text-4xl md:text-5xl font-semibold tracking-thight">
								<ProductLink href={"#"}>Computadoras</ProductLink>
							</div>
						</ProductLeft>
						<ProductRight progress={progress}>
							<Image
								className="h-full"
								src="/assets/productos_imagenes/ryd-laptop-image.jpg"
								layout="responsive"
								width={550}
								height={850}
								alt="Laptop"
							/>
						</ProductRight>
					</ProductContainer>
				)}></Title>
			<Title
				page={1}
				renderContent={({ progress }) => (
					<ProductContainer>
						<ProductLeft progress={progress}>
							<div>Servidores</div>
							<div className="text-4xl md:text-5xl font-semibold tracking-thight">
								<ProductLink href="#">Servidores</ProductLink>
							</div>
						</ProductLeft>
						<ProductRight progress={progress}>
							<Image
								className="h-full"
								src="/assets/productos_imagenes/ryd-servidor-image.jpg"
								layout="responsive"
								width={550}
								height={850}
								alt="Laptop"
							/>
						</ProductRight>
					</ProductContainer>
				)}></Title>
			<Title
				page={2}
				renderContent={({ progress }) => (
					<ProductContainer>
						<ProductLeft progress={progress}>
							<div>Componentes</div>
							<div className="text-4xl md:text-5xl font-semibold tracking-thight">
								<ProductLink href="#">Componentes</ProductLink>
							</div>
						</ProductLeft>
						<ProductRight progress={progress}>
							<Image
								className="h-full"
								src="/assets/productos_imagenes/ryd-componentes-image.jpg"
								layout="responsive"
								width={550}
								height={850}
								alt="Laptop"
							/>
						</ProductRight>
					</ProductContainer>
				)}></Title>
			<Title
				page={3}
				renderContent={({ progress }) => (
					<ProductContainer>
						<ProductLeft progress={progress}>
							<div>Impresoras</div>
							<div className="text-4xl md:text-5xl font-semibold tracking-thight">
								<ProductLink href="#">Impresoras</ProductLink>
							</div>
						</ProductLeft>
						<ProductRight progress={progress}>
							<Image
								className="h-full"
								src="/assets/productos_imagenes/ryd-impresora-image.jpg"
								layout="responsive"
								width={550}
								height={850}
								alt="Laptop"
							/>
						</ProductRight>
					</ProductContainer>
				)}></Title>
			<Title
				page={4}
				renderContent={({ progress }) => (
					<ProductContainer>
						<ProductLeft progress={progress}>
							<div>Redes</div>
							<div className="text-4xl md:text-5xl font-semibold tracking-thight">
								<ProductLink href="#">Redes</ProductLink>
							</div>
						</ProductLeft>
						<ProductRight progress={progress}>
							<Image
								className="h-full"
								src="/assets/productos_imagenes/ryd-redes-image.jpg"
								layout="responsive"
								width={550}
								height={850}
								alt="Laptop"
							/>
						</ProductRight>
					</ProductContainer>
				)}></Title>
		</TitleContent>
	</TitleWrapper>
);

export default Products;
