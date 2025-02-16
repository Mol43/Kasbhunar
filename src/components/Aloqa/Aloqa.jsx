import { MdHomeFilled } from 'react-icons/md'
import './aloqa.css'
import { FaMapLocationDot } from 'react-icons/fa6'
import { RiPhoneFill } from 'react-icons/ri'
import { Link } from 'react-router-dom'




function Aloqa() {
    return (
        <>
            <section>
                <Link to='/' className="aloqa-link flex justify-between items-center gap-2">
                    <MdHomeFilled /> <p>{'Bosh sahifa > Aloqa'}</p>
                </Link>
                <h1>Aloqa</h1>
                <div className="xarita">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2503.1657276121427!2d67.15362694078264!3d37.44160262642756!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f354739a7400e1d%3A0x1680c8fcd966be85!2sAngor%20tumani%201-son%20KHM!5e1!3m2!1sru!2s!4v1730448994616!5m2!1sru!2s"
                        width="100%"
                        height="400"
                        style={{ border: "0" }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade">
                    </iframe>

                </div>

                <div className="forms flex justify-between items-start">
                    <div className="info">
                        <div className="info-title">
                            <FaMapLocationDot className='icon' />
                            <div className="title-text">
                                <h3>Manzil</h3>
                                <p>Surxondaryo viloyati <br /> Angor tumani ...</p>
                            </div>
                        </div>
                        <div className="info-title">
                            <RiPhoneFill size={20} className='icon' />
                            <div className="title-text">
                                <h3>Call</h3>
                                <p>+998 (94)-060-93 00</p>
                            </div>
                        </div>
                        <div className="info-title">
                            <RiPhoneFill size={20} className='icon' />

                            <div className="title-text">
                                <h3>Email</h3>
                                <p>info@gmail.com</p>
                            </div>
                        </div>
                    </div>
                    <form action="submit">
                        <div className="inputs flex justify-between items-center gap-4">
                            <input type="text" placeholder='Ism' />
                            <input type="email" placeholder='Email' />
                        </div>
                        <input type="text" placeholder='Mavzu' />
                        <textarea cols="30" rows="10" placeholder='Xabar'></textarea>
                        <button type="submit">Boshlash</button>
                    </form>
                </div>
            </section>
        </>
    )
}

export default Aloqa