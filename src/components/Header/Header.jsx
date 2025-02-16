import { IoEyeSharp } from 'react-icons/io5'
import './header.css'
import { FaComments, } from 'react-icons/fa'
import { MdHomeFilled, MdOutlineDateRange } from 'react-icons/md'
import { Link } from 'react-router-dom'




function Header() {

    const obj = [
        {
            img: '/img/avtomobilsozlik.png',
            heading: 'Avtomobilsozlik',
            paragraph: 'Et architecto provident deleniti facere repellat nobis iste. Id facere quia quae dolores dolorem tempore.',
            prosmotr: 77,
            coments: 0,
            date: '11.10.2024',
        },
        {
            img: '/img/kasb-tikuvchilik.png',
            heading: 'Tikuvchilik',
            paragraph: 'Et architecto provident deleniti facere repellat nobis iste. Id facere quia quae dolores dolorem tempore.',
            prosmotr: 77,
            coments: 0,
            date: '11.10.2024',
        },
        {
            img: '/img/agrobiznes.png',
            heading: 'Agrobiznes, marketing',
            paragraph: 'Et architecto provident deleniti facere repellat nobis iste. Id facere quia quae dolores dolorem tempore.',
            prosmotr: 77,
            coments: 0,
            date: '11.10.2024',
        },
        {
            img: '/img/mashinist.png',
            heading: 'Traktor mashinist',
            paragraph: 'Et architecto provident deleniti facere repellat nobis iste. Id facere quia quae dolores dolorem tempore.',
            prosmotr: 77,
            coments: 0,
            date: '11.10.2024',
        },
        {
            img: '/img/axborot.png',
            heading: 'Axborot texalogiya',
            paragraph: 'Et architecto provident deleniti facere repellat nobis iste. Id facere quia quae dolores dolorem tempore.',
            prosmotr: 77,
            coments: 0,
            date: '11.10.2024',
        },
        {
            img: '/img/dvigatel.png',
            heading: 'Dvigatellarni ta’mirlash',
            paragraph: 'Et architecto provident deleniti facere repellat nobis iste. Id facere quia quae dolores dolorem tempore.',
            prosmotr: 77,
            coments: 0,
            date: '11.10.2024',
        },
    ]



    return (
        <div className='header-kasb'>
            <header>
                <Link to='/' className="header-link flex items-center gap-1">
                    <MdHomeFilled /> <p>{'Bosh sahifa > Kasblar'}</p>
                </Link>
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