import React, { useRef } from 'react'
import CartCountButton from '../../Components/Common/CartCountButton'
import Footer from '../../Components/Common/Footer'
import Menu from '../../Components/Common/Menu'
import Banner from '../../Components/Home/Banner'
import { menuItemsData } from '../../Components/Common/Menu/data';


const Home = () => {
  const menuRef=useRef();
  const handleScrollMenu=()=>menuRef.current.scrollIntoView({behavior:'smooth'})
  return (
    <div>
        {/*Banner*/}
        <Banner handleScrollMenu={handleScrollMenu}/>
        {/*Menu*/}
        <Menu list={menuItemsData} ref={menuRef}/>
        {/*Footer*/}
        <Footer/>
        {/*Cart Count Button*/}
        <CartCountButton/>
    </div>
  )
}

export default Home
