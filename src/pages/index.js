import Head from "next/head";
import VideoHeader from "../components/VideoHeader/VideoHeader";
import Information from "../components/Information/Information";
import Capacities from "../components/Capacities/Capacities";

const Home = () => {
	return (
		<div>
			<Head>
				<title>R y D</title>
				<meta name="description" content="R y D" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<VideoHeader />
			<div className="bg-black rounded-full">
				<Information />p
				<Capacities />
			</div>
		</div>
	);
};

export default Home;
