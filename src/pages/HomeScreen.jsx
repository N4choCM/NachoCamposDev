import Banner from '../components/Banner'
import PropTypes from 'prop-types';

const HomeScreen = ({changeDarkMode, darkMode}) => {
  return (
    <Banner changeDarkMode={changeDarkMode} darkMode={darkMode} />
  )
}

HomeScreen.propTypes = {
  darkMode: PropTypes.bool.isRequired,
  changeDarkMode: PropTypes.func.isRequired
};

export default HomeScreen
