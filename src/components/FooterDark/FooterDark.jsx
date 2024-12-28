import { AiFillInstagram } from "react-icons/ai"
import { FaFacebook, FaTelegram } from "react-icons/fa"
import { FaMapLocationDot } from "react-icons/fa6"
import { IoTimeOutline } from "react-icons/io5"
import { RiPhoneFill } from "react-icons/ri"
import './footer.css'




function Footer() {
  return (
    <div className="footer-dark">
      <footer className="flex justify-around items-center block-res">
        <div className="footer-logo">
          <img src="./logo.png" alt="" />
          <p>Sayt ma’lumotlaridan <br /> foydalanganda sayt manba sifatida <br /> ko’rsatilishi shart</p>
          <div className="footer-link flex justify-between items-center gap-4">
            <a href="#">

              <FaTelegram size={25} />
            </a>
            <a href="#">

              <FaFacebook size={25} />
            </a>
            <a href="#">

              <AiFillInstagram size={25} />
            </a>
          </div>
        </div>
        <div className="malumot">
          <h2>Ma’lumotlar</h2>

          <div className="title">
            <FaMapLocationDot size={20} /> <p>Surxondaryo viloyati <br /> Angor tumani ...</p>
          </div>
          <div className="title">
            <RiPhoneFill size={20} /> <p>+998 (94)-060-93 00</p>
          </div>
          <div className="title">
            <IoTimeOutline size={30} /> <p>Du-Shan 8:00 - 18:00  Yakshanba  yopiq</p>
          </div>
        </div>
        <div className="murojat">
          <h2>Murojat uchun</h2>
          <div className="title">
            <RiPhoneFill size={20} />
            <div className="num">
              <p>+998 (94)-060-93 00</p>
              <p>+998 (94)-032-33 00</p>
              <p>+998 (94)-0430-73 00</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer