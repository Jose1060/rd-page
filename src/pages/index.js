import Head from "next/head";
import VideoHeader from "../components/VideoHeader/VideoHeader";
import Information from "../components/Information/Information";
import Capacities from "../components/Capacities/Capacities";
import Products from "../components/Products/Products";
import TradeMarks from "../components/TradeMarks/TradeMarks";
import ContactUs from "../components/ContactUS/ContactUs";
import Footer from "../components/Footer/Footer";

const Home = () => {
	return (
		<div>
			<Head>
				<title>R y D</title>
				<meta name="description" content="R y D" />
				<link rel="icon" href="/favicon.ico" />
				<script
					src="//code.tidio.co/lt7xwouluaicnmzgkitjmrmbaw0wbjb0.js"
					async></script>
			</Head>

			<VideoHeader />
			<div className="bg-turquoise-100 rounded-t-full">
				<Information />
				<Capacities />
				<Products />
				<TradeMarks />
				<ContactUs />
				<Footer />
			</div>
		</div>
	);
};

export default Home;
