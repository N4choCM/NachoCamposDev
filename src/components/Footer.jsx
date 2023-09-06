import "../css/footer.css";
import { Link } from "react-router-dom";
import logo from "../assets/favIcon.png";
import PropTypes from "prop-types";

const Footer = ({ changeDarkMode, darkMode }) => {
	return (
		<footer className="margin-footer mt-5">
			<div className="bg-footer">
				<div className="container">
					<div className="row d-flex flex-column flex-md-row gap-5 py-5">
						<div className="d-none d-lg-flex col-12 col-lg d-flex flex-lg-column justify-content-center align-items-center text-white gap-5">
							<Link
								to="https://github.com/N4choCM"
								className="text-white social-hover"
								target="_blank"
							>
								<i
									className={
										!darkMode
											? "fa fa-github fa-2x text-white social-hover"
											: "fa fa-github fa-2x text-dark social-hover"
									}
									aria-hidden="true"
								></i>
							</Link>
							<Link
								to="https://github.com/N4choCM"
								className="text-white social-hover"
								target="_blank"
							>
								<i
									className={
										!darkMode
											? "fa fa-youtube-play fa-2x text-white social-hover"
											: "fa fa-youtube-play fa-2x text-dark social-hover"
									}
									aria-hidden="true"
								></i>
							</Link>
							<img
								className={
									!darkMode
										? "footer-logo d-lg-none img-logo-white"
										: "footer-logo d-lg-none"
								}
								src={logo}
								alt="logo"
							/>
							<Link
								to="https://www.linkedin.com/in/ignacio-campos-marti"
								className="text-white social-hover"
								target="_blank"
							>
								<i
									className={
										!darkMode
											? "fa fa-linkedin-square fa-2x text-white social-hover"
											: "fa fa-linkedin-square fa-2x text-dark social-hover"
									}
									aria-hidden="true"
								></i>
							</Link>
						</div>
						<div
							className={
								!darkMode
									? "d-none col-12 col-lg d-lg-flex justify-content-center mt-4 img-logo-white"
									: "d-none col-12 col-lg d-lg-flex justify-content-center mt-4"
							}
						>
							<img
								className="footer-logo"
								src={logo}
								alt="logo"
							/>
						</div>
						<div
							className={
								!darkMode
									? "col-12 col-lg text-white d-flex justify-content-center align-items-center flex-column"
									: "col-12 col-lg text-dark d-flex justify-content-center align-items-center flex-column"
							}
						>
							<h4 className="text-decoration-underline mt-4">
								Contacto
							</h4>
							<p>
								<span className="whatsapp">
									<Link
										to="https://wa.link/8g6ywt"
										className={
											!darkMode
												? "whatsapp text-white"
												: "whatsapp text-dark"
										}
										target="_blank"
									>
										<i
											className={
												!darkMode
													? "fa fa-whatsapp me-1 text-white whatsapp"
													: "fa fa-whatsapp me-1 text-dark whatsapp"
											}
											aria-hidden="true"
										></i>{" "}
										+34 628 523 682{" "}
									</Link>
								</span>
							</p>
							<p>
								<span>
									<i
										className={
											!darkMode
												? "fa fa-envelope-o me-1 text-white"
												: "fa fa-envelope-o me-1 text-dark"
										}
										aria-hidden="true"
									></i>{" "}
									nachocamposdev@gmail.com
								</span>
							</p>
						</div>
						<div className="d-lg-none col-12 col-lg d-flex flex-lg-column justify-content-center align-items-center text-white gap-5">
							<Link
								to="https://github.com/N4choCM"
								className="text-white social-hover"
								target="_blank"
							>
								<i
									className={
										!darkMode
											? "fa fa-github fa-2x text-white social-hover"
											: "fa fa-github fa-2x text-dark social-hover"
									}
									aria-hidden="true"
								></i>
							</Link>
							<Link
								to="https://github.com/N4choCM"
								className="text-white social-hover"
								target="_blank"
							>
								<i
									className={
										!darkMode
											? "fa fa-youtube-play fa-2x text-white social-hover"
											: "fa fa-youtube-play fa-2x text-dark social-hover"
									}
									aria-hidden="true"
								></i>
							</Link>
							<Link
								to="https://www.linkedin.com/in/ignacio-campos-marti"
								className="text-white social-hover"
								target="_blank"
							>
								<i
									className={
										!darkMode
											? "fa fa-linkedin-square fa-2x text-white social-hover"
											: "fa fa-linkedin-square fa-2x text-dark social-hover"
									}
									aria-hidden="true"
								></i>
							</Link>
						</div>
						<div
							className={
								!darkMode
									? "col-12 text-center text-white"
									: "col-12 text-center text-dark"
							}
						>
							<span>2023 &copy; Nacho Campos Martí</span>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
};

Footer.propTypes = {
	darkMode: PropTypes.bool.isRequired,
	changeDarkMode: PropTypes.func.isRequired,
};

export default Footer;
