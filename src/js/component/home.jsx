import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

// 4. Importar componente
import Navbar from "./navbar";
import Jumbotron from "./jumbotron";
import Card from "./card";
import Footer from "./footer";

//create your first component
const Home = () => {
	return (

// 5. Usar componente

		<>
		<Navbar/>
		<div className="container">
			<div className="row">
				<Jumbotron/>
			</div>
			<div className="row">
				<div className="col-3">
					<Card/>
				</div>
				<div className="col-3">
					<Card/>
				</div>
				<div className="col-3">
					<Card/>
				</div>
				<div className="col-3">
					<Card/>
				</div>
			</div>
		</div>
		<Footer/>
	    </>
	);
};

export default Home;
