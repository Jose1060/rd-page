const Review = ({ children, by }) => (
	<div className="flex flex-col justify-center text-center px-5 md:px-10 lg:px20">
		<div className="text-xl md:text-2xl leading-[3rem] tracking-thight">
			&ldquo;{children}&ldquo;
		</div>
		<div className="mt-6">&mdash; {by}</div>
	</div>
);

export default Review;
