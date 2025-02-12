import { AiOutlineCheck } from 'react-icons/ai'
import './bizhaqimizda.css'
import { MdHomeFilled } from 'react-icons/md'




function BizHaqimizda() {
    const obj = [
        {
            name: "Talabalar",
            reyting: 454,
        },
        {
            name: "Kasblar",
            reyting: 7,
        },
        {
            name: "Avtomobillar",
            reyting: 5,
        },
        {
            name: "O'qituvchilar",
            reyting: 9,
        },
    ]

  return (
    <>
        <aside>
            <div className="aside-link flex items-center gap-2">
                <MdHomeFilled /> <p>{'Bosh sahifa > Biz haqimizda'}</p>
            </div>
            <h1>Biz haqimizda </h1>
            <div className="header flex justify-between items-center">
                <div className="header-text">
                    <h1>Angor Tuman 1-Sonli Politexnikumida siz zamonaviy, hududi va sohasining eng kuchlilaridan hunar organasiz</h1>
                    <h2>Maktabimizda oziga hos nimalar mavjud?</h2>
                    <div className="titl">
                    <AiOutlineCheck /> <p>Avtomobillarni mustaqil boshqarish uchun avtodrom</p>
                    </div>
                    <div className="titl">
                    <AiOutlineCheck /> <p>Umumiy maydoni 15 ga. oquv tajriba amaliyot poligoni</p>
                    </div>
                    <div className="titl">
                    <AiOutlineCheck /> <p>Yer maydoni 6 ga. - asalarichilik hududi</p>
                    </div>
                    <p>Bundan tashqari galla(8 ga.) va paxta(7 ga.) maydonlari, jami 5182 ta badiiy va oquv adabiyotlarini ichiga olgan AKR Markazi, 50 orinli yotoqxona va 180 orinli ishlab chiqarish ustaxonalari mavjud.</p>
                </div>
                <div className="header-img">
                    <img src="/img/tikuvchilik-1 1.png" alt="img" />
                </div>
            </div>
            <div className="reyting flex justify-evenly items-center">
                {obj.map((item, i) => {
                    return (
                        <div className="tit" key={i}>
                            <h1>{item.reyting}</h1>
                            <h2>{item.name}</h2>
                        </div>
                    )
                })}
            </div>
        </aside>
    </>
  )
}

export default BizHaqimizda