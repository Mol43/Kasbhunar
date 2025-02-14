import { Link } from 'react-router-dom'
import './navbar.css'
import { FaBars, } from 'react-icons/fa'
import { useState } from 'react'
import { FaXmark } from 'react-icons/fa6'
import { Container } from '../container/container'



function Navbar() {

  const [barClas, setBarClas] = useState(false)



  const bar = () => {
    return barClas === false ? setBarClas(true) : setBarClas(false)
  }

  return (
    <>
      <nav className="flex justify-between items-center">
        <Container>
          <div className='flex justify-between items-center'>
            <Link to={"/"} >
              <img src="/img/logo.png" alt="logo" />
            </Link>
            <div className={`${barClas === false ? 'menu1' : 'menu2'} nav-menu  flex gap-[25px]`}>
              <Link to="/">Bosh sahifa</Link>
              <Link to="/bizhaqimizda">Biz haqimizda</Link>
              <Link to="/kasblar">Kasblar</Link>
              <Link to="/aloqa">Aloqa</Link>
            </div>
            <div className="bar">
              <i onClick={bar} className={`${barClas === false ? 'block' : 'none'}`} ><FaBars /></i>
              <i onClick={bar} className={`${barClas === false ? 'none' : 'block'}`} ><FaXmark /></i>
            </div>
          </div>  
        </Container>
      </nav>
      <div className="nav"></div>
    </>
  )
}

export default Navbar