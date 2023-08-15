import "../css/banner.css";
import PropTypes from "prop-types";
import lgBanner from "../assets/lg-banner.jpg";
import mdBanner from "../assets/md-banner.jpg";
import smBanner from "../assets/sm-banner.jpg";

const Banner = ({ darkMode }) => {
	return (
		<div
			id="home"
			className="carousel slide carousel-fade"
			data-bs-ride="carousel"
		>
			<div className="carousel-inner container-carousel">
				<div className="carousel-item active">
					<img
						src={smBanner}
						className="d-block d-md-none w-100"
						alt="imagen 1"
					/>
					<img
						src={mdBanner}
						className="d-none d-md-block d-lg-none w-100"
						alt="imagen 1"
					/>
					<img
						src={lgBanner}
						className="d-none d-lg-block w-100"
						alt="imagen 1"
					/>
				</div>
				<div className={darkMode ? "overlay-dark" : "overlay"}>
					<div className="h-100 d-flex flex-column align-items-center justify-content-center text-white p-3">
						<br />
						<br />
						<br />
						<span className="text-container">
						<h3
							className={
								darkMode
									? "text-white text-center writing-machine"
									: "text-dark text-center writing-machine"
							}
						>
							Hey!
						</h3>

						</span>
						<br />
						<span className="text-container">
						<h5
							className={
								darkMode
									? "text-white text-center writing-machine"
									: "text-dark text-center writing-machine"
							}
						>
							I&#39;m Nacho Campos,{" "}
						</h5>
						</span>
						<span className="text-container">
						<h5
							className={
								darkMode
									? "text-white text-center writing-machine-blink"
									: "text-dark text-center writing-machine-blink"
							}
						>
							and I develop software solutions.
						</h5>
						</span>
						<br />
						<button
							className={
								darkMode
									? "btn btn-outline-light btn-lg btn-load btn-appear"
									: "btn btn-outline-dark btn-lg btn-load btn-appear"
							}
						>
							Get to know me! 😀
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

Banner.propTypes = {
	darkMode: PropTypes.bool.isRequired,
};

export default Banner;
