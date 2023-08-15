import AboutAccordion from '../components/AboutAccordion';
import Banner from '../components/Banner'
import PropTypes from 'prop-types';
import ProjectCards from '../components/ProjectCards';

const HomeScreen = ({changeDarkMode, darkMode}) => {
  return (
    <>
      <Banner changeDarkMode={changeDarkMode} darkMode={darkMode} />
      <AboutAccordion changeDarkMode={changeDarkMode} darkMode={darkMode} />
      <ProjectCards changeDarkMode={changeDarkMode} darkMode={darkMode} />
    </>
  )
}

HomeScreen.propTypes = {
  darkMode: PropTypes.bool.isRequired,
  changeDarkMode: PropTypes.func.isRequired
};

export default HomeScreen
