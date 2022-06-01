import Image from "next/image";

const PageHeader = ({ children, title, bg }) => {
	return (
		<div className="min-h-screen md:bg-turquoise-400 flex flex-col md:flex-row sticky -z-10 ">
			<div className="items-center flex-1 md:bg-primary-500 flex justify-center bg-transparent">
				<div className="">
					<h1 className="text-primary-100 text-7xl px-4 text-center py-10 font-bold ">
						{title}
					</h1>
					<p className="px-8 text-primary-200 text-xl">{children}</p>
				</div>
			</div>
			<div className="flex-1 bg-gray-500 flex absolute md:relative -z-10 top-0 h-screen ">
				<div className="text-white">
					<video
						autoPlay
						loop
						muted
						playsInline
						className="md:fixed h-full object-cover">
						<source src={bg} type="video/mp4" />
					</video>
				</div>
			</div>
		</div>
	);
};

export default PageHeader;
