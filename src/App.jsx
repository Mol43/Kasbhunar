import BoshSahifa from "./pages/Bosh sahifa/BoshSahifa"
import Aloqa from "./pages/AloqaPage/AloqaPage"
import Kasblar from "./pages/kasblar/Kasblar"
import BizHaqimizda from "./pages/BizHaqimizdaPage/BizHaqimizdaPage"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<BoshSahifa />} />
          <Route path="/bizhaqimizda" element={<BizHaqimizda />} />
          <Route path="/kasblar" element={<Kasblar />} />
          <Route path="/aloqa" element={<Aloqa />} />
        </Routes>
      </Router>
    </>
  )
}

export default App