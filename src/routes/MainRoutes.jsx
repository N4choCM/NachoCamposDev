import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { Routes, Route } from "react-router-dom";
import ErrorScreen from "../pages/ErrorScreen";
import HomeScreen from "../pages/HomeScreen";
import PropTypes from "prop-types";

const MainRoutes = ({changeDarkMode, darkMode}) => {
		return (
			<>
				<Navbar changeDarkMode={changeDarkMode} darkMode={darkMode}/>
				<Routes>
					<Route path="/" element={<HomeScreen changeDarkMode={changeDarkMode} darkMode={darkMode}/>} />
					<Route path="*" element={<ErrorScreen changeDarkMode={changeDarkMode} darkMode={darkMode}/>} />
				</Routes>
				<Footer changeDarkMode={changeDarkMode} darkMode={darkMode}/>
			</>
		);
}

MainRoutes.propTypes = {
	darkMode: PropTypes.bool.isRequired,
	changeDarkMode: PropTypes.func.isRequired
};

export default MainRoutes;