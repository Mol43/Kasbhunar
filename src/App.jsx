import BoshSahifa from "./pages/Bosh sahifa/BoshSahifa"
import Aloqa from "./pages/AloqaPage/AloqaPage"
import Kasblar from "./pages/kasblar/Kasblar"
import BizHaqimizda from "./pages/BizHaqimizdaPage/BizHaqimizdaPage"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Container } from "./components/container/container";
import { MiniFooter } from "./components/mini-footer/mini-footer";


function App() {
  // Mexa&Jorabek

  return (
    <>
      <Container>
        <Router>
          <Routes>
            <Route path="/" element={<BoshSahifa />} />
            <Route path="/bizhaqimizda" element={<BizHaqimizda />} />
            <Route path="/kasblar" element={<Kasblar />} />
            <Route path="/aloqa" element={<Aloqa />} />
          </Routes>
        </Router>
      </Container>
      <MiniFooter />
    </>
  )
}

export default App