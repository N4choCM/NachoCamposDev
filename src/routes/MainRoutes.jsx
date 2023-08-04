import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { Routes, Route } from "react-router-dom";
import ErrorScreen from "../pages/ErrorScreen";
import HomeScreen from "../pages/HomeScreen";
import PropTypes from "prop-types";

const MainRoutes = ({darkMode}) => {
		return (
			<>
				<Navbar darkMode={darkMode}/>
				<Routes>
					<Route path="/" element={<HomeScreen darkMode={darkMode}/>} />
					<Route path="*" element={<ErrorScreen darkMode={darkMode}/>} />
				</Routes>
				<Footer darkMode={darkMode}/>
			</>
		);
}

MainRoutes.propTypes = {
	darkMode: PropTypes.bool.isRequired,
};

export default MainRoutes;