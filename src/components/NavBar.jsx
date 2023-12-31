import "../css/navbar.css";
import { NavLink } from "react-router-dom";
import { Link } from "react-scroll";
import logo from "../assets/favIcon.png";
import PropTypes from "prop-types";
import Swal from 'sweetalert2';

const NavBar = ({ darkMode, changeDarkMode }) => {

	const showContactInfo = () => {
		Swal.fire({
			html: `
				<h6>Email: nachocamposdev@gmail.com</h6>
				<h6>Phone: +34 628 523 682</h6>
			`,
			icon: 'info',
			showCancelButton: false,
			showConfirmButton: false,
			showCloseButton: true,
			position: window.innerWidth <= 992 ? 'center' : 'top-end',
		});
	};
	

	return (
		<header className="fixed-top">
			<nav className="navbar navbar-expand-lg navbar-dark navbar-custom">
				<div className="container">
					<Link
						to="home"
						smooth={true}
						duration={200}
						activeClassName="active"
						className="navbar-brand custom-pointer"
					>
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
									to="home"
									smooth={true}
									duration={200}
									activeClassName="active"
									className="nav-link custom-pointer"
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
									to="about"
									smooth={true}
									duration={200}
									activeClassName="active"
									className="nav-link custom-pointer"
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
									to="projects"
									smooth={true}
									duration={200}
									activeClassName="active"
									className="nav-link custom-pointer"
								>
									{" "}
									<i
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
									to="https://www.youtube.com/@NachoCamposMarti"
									target="_blank"
								>
									<i
										className={
											darkMode
												? "text-dark fa fa-youtube-play me-1"
												: "text-white fa fa-youtube-play me-1"
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
										YouTube
									</span>{" "}
								</NavLink>
							</li>
							<li className="nav-item hover-custom">
            <NavLink
              className="nav-link"
              aria-current="page"
              to="#"
              onClick={showContactInfo}
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
