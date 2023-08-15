import "../css/navbar.css";
import { NavLink } from "react-router-dom";
import { Link } from 'react-scroll';
import logo from "../assets/favIcon.png";
import PropTypes from "prop-types";

const NavBar = ({ darkMode, changeDarkMode }) => {
	return (
		<header className="fixed-top">
			<nav className="navbar navbar-expand-lg navbar-dark navbar-custom">
				<div className="container">
					<Link className="navbar-brand my-auto" to="/">
						<div>
							<img
								className={
									!darkMode
										? "img-logo img-logo-white me-3"
										: "img-logo me-3"
								}
								src={logo}
								alt="logo"
							/>
							<span>
								<h4
									className={
										darkMode
											? "text-dark text-center d-none d-md-block"
											: "text-white text-center d-none d-md-block"
									}
								>
									Nacho Campos Martí
								</h4>
								<h6
									className={
										darkMode
											? "text-dark text-center d-none d-md-block"
											: "text-white text-center d-none d-md-block"
									}
								>
									Full Stack Developer
								</h6>
							</span>
						</div>
					</Link>
					<button
						className="navbar-toggler"
						type="button"
						data-bs-toggle="collapse"
						data-bs-target="#navbarNav"
						aria-controls="navbarNav"
						aria-expanded="false"
						aria-label="Toggle navigation"
					>
						<span className="navbar-toggler-icon"></span>
					</button>
					<div className="collapse navbar-collapse" id="navbarNav">
						<ul className="navbar-nav ms-auto">
							<li className="nav-item hover-custom">
							<Link
									to="home" smooth={true} duration={200} activeClassName="active" className="nav-link custom-pointer"
								>
									<i
										className={
											darkMode
												? "text-dark fa fa-home me-1"
												: "text-white fa fa-home me-1"
										}
										aria-hidden="true"
									></i>
									<span
										className={
											darkMode
												? "text-dark"
												: "text-white"
										}
									>
										Home
									</span>
								</Link>
							</li>
							<li className="nav-item hover-custom">
								<Link
									to="about" smooth={true} duration={200} activeClassName="active" className="nav-link custom-pointer"
								>
									<i
										className={
											darkMode
												? "text-dark fa fa-graduation-cap me-1"
												: "text-white fa fa-graduation-cap me-1"
										}
										aria-hidden="true"
									></i>
									<span
										className={
											darkMode
												? "text-dark"
												: "text-white"
										}
									>
										About Me
									</span>{" "}
								</Link>
							</li>
							<li className="nav-item hover-custom">
							<Link
									to="projects" smooth={true} duration={200} activeClassName="active" className="nav-link custom-pointer"
								>									<i
										className={
											darkMode
												? "text-dark fa fa-rocket me-1"
												: "text-white fa fa-rocket me-1"
										}
										aria-hidden="true"
									></i>
									<span
										className={
											darkMode
												? "text-dark"
												: "text-white"
										}
									>
										Projects
									</span>{" "}
								</Link>
							</li>
							<li className="nav-item hover-custom">
								<NavLink
									className="nav-link"
									aria-current="page"
									to="https://github.com/N4choCM"
									target="_blank"
								>
									<i
										className={
											darkMode
												? "text-dark fa fa-github me-1"
												: "text-white fa fa-github me-1"
										}
										aria-hidden="true"
									></i>
									<span
										className={
											darkMode
												? "text-dark"
												: "text-white"
										}
									>
										GitHub
									</span>{" "}
								</NavLink>
							</li>
							<li className="nav-item hover-custom">
								<NavLink
									className="nav-link"
									aria-current="page"
									to="https://www.linkedin.com/in/ignacio-campos-marti/"
									target="_blank"
								>
									<i
										className={
											darkMode
												? "text-dark fa fa-linkedin-square me-1"
												: "text-white fa fa-linkedin-square me-1"
										}
										aria-hidden="true"
									></i>
									<span
										className={
											darkMode
												? "text-dark"
												: "text-white"
										}
									>
										LinkedIn
									</span>{" "}
								</NavLink>
							</li>
							<li className="nav-item hover-custom">
								<NavLink
									className="nav-link"
									aria-current="page"
									to="https://www.linkedin.com/in/ignacio-campos-marti/"
									target="_blank"
								>
									<i
										className={
											darkMode
												? "text-dark fa fa-envelope me-1"
												: "text-white fa fa-envelope me-1"
										}
										aria-hidden="true"
									></i>
									<span
										className={
											darkMode
												? "text-dark"
												: "text-white"
										}
									>
										Contact
									</span>
								</NavLink>
							</li>
						</ul>
						<div className="d-flex gap-2 align-items-center justify-content-center ms-2">
							{darkMode ? (
								<i
									className="fa fa-sun-o text-white"
									aria-hidden="true"
								></i>
							) : (
								<i
									className="fa fa-moon-o"
									aria-hidden="true"
								></i>
							)}
							<div className="form-check form-switch">
								<input
									className="form-check-input"
									type="checkbox"
									role="switch"
									onChange={changeDarkMode}
								/>
							</div>
						</div>
					</div>
				</div>
			</nav>
		</header>
	);
};

NavBar.propTypes = {
	darkMode: PropTypes.bool.isRequired,
	changeDarkMode: PropTypes.func.isRequired,
};

export default NavBar;
