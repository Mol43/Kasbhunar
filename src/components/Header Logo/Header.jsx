import './header.css'



function Header() {
  return (
    <div className='header-logo'>
        <header className='flex justify-between items-center'>
            <div className="title-logo">
              <h1>Bugunning Bilimi, Ertaning yolboshchisi</h1>
              <h3>Biz oz qadriyatlariga va hududdagi eng kuchli pedagoglarga ega bolgan Kollejmiz</h3>
              <button>Boshlash</button>
            </div>
        </header>
    </div>
  )
}

export default Header