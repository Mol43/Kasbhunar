import { IoEyeSharp } from 'react-icons/io5'
import './header.css'
import { FaComments, } from 'react-icons/fa'
import { MdHomeFilled, MdOutlineDateRange } from 'react-icons/md'




function Header() {

    const obj = [
        {
<<<<<<< HEAD
            img: '/img/3ed65c588dab63b697649ceb5366772f 1.png',
=======
            img: '/img/avtomobilsozlik.png',
>>>>>>> 837689af46bcfe257758ffbf6a3036b59d20f9a3
            heading: 'Avtomobilsozlik',
            paragraph: 'Et architecto provident deleniti facere repellat nobis iste. Id facere quia quae dolores dolorem tempore.',
            prosmotr: 77,
            coments: 0,
            date: '11.10.2024',
        },
        {
<<<<<<< HEAD
            img: '/img/kasb-tikuvchilik.png',
            heading: 'Tikuvchilik',
=======
            img: '/img/avtomobilsozlik.png',
            heading: 'Avtomobilsozlik',
>>>>>>> 837689af46bcfe257758ffbf6a3036b59d20f9a3
            paragraph: 'Et architecto provident deleniti facere repellat nobis iste. Id facere quia quae dolores dolorem tempore.',
            prosmotr: 77,
            coments: 0,
            date: '11.10.2024',
        },
        {
<<<<<<< HEAD
            img: '/img/agrobiznes.png',
            heading: 'Agrobiznes, marketing',
=======
            img: '/img/avtomobilsozlik.png',
            heading: 'Avtomobilsozlik',
>>>>>>> 837689af46bcfe257758ffbf6a3036b59d20f9a3
            paragraph: 'Et architecto provident deleniti facere repellat nobis iste. Id facere quia quae dolores dolorem tempore.',
            prosmotr: 77,
            coments: 0,
            date: '11.10.2024',
        },
        {
<<<<<<< HEAD
            img: '/img/mashinist.png',
            heading: 'Traktor mashinist',
=======
            img: '/img/avtomobilsozlik.png',
            heading: 'Avtomobilsozlik',
>>>>>>> 837689af46bcfe257758ffbf6a3036b59d20f9a3
            paragraph: 'Et architecto provident deleniti facere repellat nobis iste. Id facere quia quae dolores dolorem tempore.',
            prosmotr: 77,
            coments: 0,
            date: '11.10.2024',
        },
        {
<<<<<<< HEAD
            img: '/img/axborot.png',
            heading: 'Axborot texalogiya',
=======
            img: '/img/avtomobilsozlik.png',
            heading: 'Avtomobilsozlik',
>>>>>>> 837689af46bcfe257758ffbf6a3036b59d20f9a3
            paragraph: 'Et architecto provident deleniti facere repellat nobis iste. Id facere quia quae dolores dolorem tempore.',
            prosmotr: 77,
            coments: 0,
            date: '11.10.2024',
        },
        {
<<<<<<< HEAD
            img: '/img/dvigatel.png',
            heading: 'Dvigatellarni ta’mirlash',
=======
            img: '/img/avtomobilsozlik.png',
            heading: 'Avtomobilsozlik',
>>>>>>> 837689af46bcfe257758ffbf6a3036b59d20f9a3
            paragraph: 'Et architecto provident deleniti facere repellat nobis iste. Id facere quia quae dolores dolorem tempore.',
            prosmotr: 77,
            coments: 0,
            date: '11.10.2024',
        },
    ]



    return (
        <div className='header-kasb'>
            <header>
                <div className="header-link flex items-center gap-1">
                    <MdHomeFilled /> <p>{'Bosh sahifa > Kasblar'}</p>
                </div>
                <h1>Kasblar</h1>
                <div className="category">
                    {obj.map((item, i) => {
                        return (
                            <div className="category-card" key={i}>
                                <div className="img">
                                    <img className='rounded-t-xl object-cover' src={item.img} alt="" />
                                    <h1>{item.heading}</h1>
                                </div>
                                <div className="text">
                                    <h1>{item.heading}</h1>
                                    <p>{item.paragraph}</p>
                                    <div className="other flex justify-between items-center">
                                        <p><IoEyeSharp /> {item.prosmotr}</p>
                                        <p><FaComments /> {item.coments}</p>
                                        <p><MdOutlineDateRange /> {item.date}</p>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </header>
        </div>
    )
}

export default Header