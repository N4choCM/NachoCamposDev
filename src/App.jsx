import './App.css'
import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainRoutes from "./routes/MainRoutes";
import ErrorScreen from "./pages/ErrorScreen";

function App() {

  const [darkMode, setDarkMode] = useState(true)

  const changeDarkMode = () => {
    setDarkMode(!darkMode)
  }

  useEffect(() => {
    document.body.classList.remove("app-mode-dark", "app-mode-light");
    document.body.classList.add(`app-mode-${darkMode ? "dark" : "light"}`);
  }, [darkMode]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<MainRoutes changeDarkMode={changeDarkMode} darkMode={darkMode} />} />
        <Route path="*" element={<ErrorScreen changeDarkMode={changeDarkMode} darkMode={darkMode} />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
