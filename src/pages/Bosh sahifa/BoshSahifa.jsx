import { ImFilesEmpty } from "react-icons/im"
import BizHaqimizda from "../../components/Biz Haqimizda/BizHaqimizda"
import Footer from "../../components/FooterDark/FooterDark"
import Header from "../../components/Header Logo/Header"
import Navbar from "../../components/Navbar/Navbar"
import { FiImage } from "react-icons/fi"
import { GoPackage } from "react-icons/go"
import './boshsahifa.css'
import { IoEyeSharp } from "react-icons/io5"
import { FaComments } from "react-icons/fa"
import { MdOutlineDateRange } from "react-icons/md"
import { Link } from "react-router-dom"





function BoshSahifa() {

  const malumot = [
    {
      icon: <ImFilesEmpty />,
      name: "Kuchli o'qitish metodikasi",
      tagName: "23 nafar toifali o'qituvchilar eng zamonaviy metodika orqali ta'lim berishadi",
      img: '/img/avtomobilsozlik.png',
      heading: 'Avtomobilsozlik',
      paragraph: 'Et architecto provident deleniti facere repellat nobis iste. Id facere quia quae dolores dolorem tempore.',
      prosmotr: 77,
      coments: 0,
      date: '11.10.2024',
      img2: '/img/pred-3 1.png',
      foydaName: 'Qisqa kurslar',
      foydaTagName: "Qisqa kurslardan jami 161 mln. so'm foyda olindi"
    },
    {
      icon: <GoPackage />,
      name: "Sifatli va zavqli amaliyot",
      tagName: "14 nafar Ishlab chiqarish ta'lim ustalari talabalarga o'rgangan bilimlarini amaliyotda qo'llashlariga yordam beradi",
      img: '/img/avtomobilsozlik.png',
      heading: 'Avtomobilsozlik',
      paragraph: 'Et architecto provident deleniti facere repellat nobis iste. Id facere quia quae dolores dolorem tempore.',
      prosmotr: 77,
      coments: 0,
      date: '11.10.2024',
      img2: '/img/pred-3 1.png',
      foydaName: 'Qisqa kurslar',
      foydaTagName: "Qisqa kurslardan jami 161 mln. so'm foyda olindi"
    },
    {
      icon: <FiImage />,
      name: "Ishga yetaklovchi diplom",
      tagName: "Kurslar oxirida siz o'z sohangiz bo'yicha sizni ishga olib kiradigan diplom bilan ta'minlanasiz",
      img: '/img/avtomobilsozlik.png',
      heading: 'Avtomobilsozlik',
      paragraph: 'Et architecto provident deleniti facere repellat nobis iste. Id facere quia quae dolores dolorem tempore.',
      prosmotr: 77,
      coments: 0,
      date: '11.10.2024',
      img2: '/img/pred-3 1.png',
      foydaName: 'Qisqa kurslar',
      foydaTagName: "Qisqa kurslardan jami 161 mln. so'm foyda olindi"
    },
  ]


  return (
    <div className="bosh">
      <Navbar />
      <Header />
      <BizHaqimizda />
      <div className="boshcards flex justify-between items-center w-[90%] h-[420px] mx-auto">
        {malumot.map((item, i) => {
          return (
            <Link to={"/"} className="boshcard" key={i} >
              <div className="roundet">{item.icon}</div>
              <h1>{item.name}</h1>
              <p>{item.tagName}</p>
              <button className="bosh-btn">Batafsil</button>
            </Link>
          )

        })}
      </div>

      <h1 className="sarlavha">Mashxur kurslarimiz</h1>

      <div className="boshcards flex justify-between items-center w-[90%] h-[420px] mx-auto">
        {malumot.map((item, i) => {
          return (
            <Link to={"/"} className="boshcard" key={i}>
              <div className="img"><img src={item.img} alt="img" /><h1>{item.heading}</h1></div>
              <div className="text">
                <h2>{item.heading}</h2>
                <h4>{item.paragraph}</h4>
                <div className="other flex justify-between items-center max-w-max gap-5">
                  <span><IoEyeSharp /> {item.prosmotr}</span>
                  <span><FaComments /> {item.coments}</span>
                  <span><MdOutlineDateRange /> {item.date}</span>
                </div>
              </div>
            </Link>
          )
        })}
      </div>

      <h1 className="sarlavha">{"Byudjetdan tashqari topilgan mablag'lar"}</h1>

      <div className="boshcards flex justify-between items-center w-[90%] h-[420px] mx-auto">
        {malumot.map((item, i) => {
          return (
            <Link to={"/"} className="boshcard" key={i}>
              <div className="img-foyda"><img src={item.img2} alt="img" /></div>
              <div className="text-foyda">
                <h1>{item.foydaName}</h1>
                <p>{item.foydaTagName}</p>
              </div>
            </Link>
          )
        })}
      </div>

      <Footer />
    </div>
  )
}

export default BoshSahifa