import { brainwave } from "../assets/index"
import { navigation } from "../components"
import {  useLocation } from 'react-router-dom'
import ButtonGradient from '../assets/svg/ButtonGradient'
import Button from './Button'
import { HamburgerMenu } from "./design/Header"
import MenuSvg from '../assets/svg/MenuSvg'
import { useState } from "react"
import { enablePageScroll , disablePageScroll} from 'scroll-lock'

const Header = () => {

  const pathNmae = useLocation()
  const [openNavigation , setOpenNavigation] = useState(false)


  const toggleNavigaton = ()=>{
    if(openNavigation){
      setOpenNavigation(false)
      enablePageScroll()
    }else{
      setOpenNavigation(true)
      disablePageScroll()
    }
  }
  const handleClick =()=>{
    if(!openNavigation) return
    enablePageScroll()
    setOpenNavigation(false)
  }
  return (
 <div className={` fixed top-0 z-50 left-0 w-full  ${openNavigation ? 'bg-n-8' : 'backdrop-blur-sm bg-n-8/90 '}`}>
  <div className="flex  items-center py-4 ">
    
      <a href="#hero" onClick={handleClick} className="block z-5 px-4">
    <img src={brainwave} width={170} height={50} alt="brainwave" />
    </a>
    
    <nav className={`fixed top-[4rem] py-4 z-2 lg:bg-transparent border-b border-n-7 bottom-0 left-0 bg-n-8 right-0 lg:static ${openNavigation ? 'flex ' : 'hidden' } m-auto lg:flex  `}>
      <div className=" relative flex flex-col  justify-center  items-center mx-auto max-lg:gap-20 lg:flex-row  ">
        {navigation.map((list , i )=>(
          <a href={list.url} onClick={handleClick} className={ ` block tracking-widest  font-code px-6 ${pathNmae.hash === list.url ? 'text-n-1' : 'text-n-4'} mx-auto md:text-xl  text-2xl lg:text-xs font-semibold leading-3 transition-colors hover:text-purple-700 uppercase ${list.onlyMobile ? 'lg:hidden' : '' }` } key={list.id}>
            {list.title}
          </a>
        ))}
      </div>
      <HamburgerMenu toggleNavigaton={toggleNavigaton} />
    </nav>
    <div className=" hidden lg:flex items-center gap-10 mr-3">
    <a className={`hidden  lg:block text-[0.80rem] transition-colors hover:text-purple-600 button`}>
      Sign in 
    </a>
    <Button className={'p-2'}>
      New Account
   
    </Button>
    </div>
   <Button className={'ml-auto lg:hidden z-5 px-4 mr-3'} onClick={toggleNavigaton}>
   <MenuSvg openNavigation={openNavigation} />
    
   </Button>
  </div>
 </div>
  )
}

export default Header
