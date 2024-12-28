import Navbar from "../../components/Navbar/Navbar"
import BizHaqimizda from "../../components/Biz Haqimizda/BizHaqimizda"
import Footer from "../../components/footer/Footer"




function BizHaqimizdaPage() {
  return (
    <div className="biz-haqimizda">
        <Navbar />
        <BizHaqimizda />
        <br /><br />
        <Footer />
    </div>
  )
}

export default BizHaqimizdaPage