import OptionsElements from "./OptionsElements";

const Options = ({ options, title, description }) => {
	return (
		<div className="px-5 my-8">
			<div className="grid grid-cols-1 gap-5 md:grid-cols-5">
				{options.map((item) => {
					return (
						<OptionsElements img={item.img} title={item.title} key={item.id}>
							{item.description}
						</OptionsElements>
					);
				})}
			</div>
		</div>
	);
};

export default Options;
