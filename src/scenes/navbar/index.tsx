
import React, { useState } from 'react'
import {Bars3Icon,XMarkIcon} from '@heroicons/react/24/solid';
import LogoImg from '@/assets/logoSportLife.png';
import Link from './Link';
import {SelectedPage} from '@/shared/types';
import useMediaQuery from '@/hooks/useMediaQuery';
import ActionButton from '@/shared/ActionButton';


type Props = {
  selectedPage:SelectedPage ,
  setSelectedPage:(value:SelectedPage)=> void,
  isTopOfPage:boolean
}

const Navbar = ({isTopOfPage,selectedPage,setSelectedPage}: Props) => {

  const[isMenuToggled,setIsMenuToggled] =useState<boolean>(false)
  const flexBetween = "flex justify-between items-center"
  const isAboveMediumScreens = useMediaQuery("(min-width:1060px)")
const navbarBackground = isTopOfPage ? "" : "bg-primary-100 drop-shadow"
  
  return (
    <nav>
      <div className={`${navbarBackground} ${flexBetween} fixed p-0 z-30 w-full py-6`}>
        <div className={`${flexBetween} mx-auto w-5/6`}>
          <div className={`${flexBetween} w-full gap-16`}>
            {/*left*/}
            <img src={LogoImg} alt="img logo" width={130}/>
            {/*right*/}
            {isAboveMediumScreens ? (<div className={`${flexBetween} w-full`}>
              <div className={`${flexBetween} gap-8 text-sm`}>
              <Link page="Home" selectedPage={selectedPage} setSelectedPage={setSelectedPage}/> 
              <Link page="Benefits" selectedPage={selectedPage} setSelectedPage={setSelectedPage}/> 
              <Link page="Our Classes" selectedPage={selectedPage} setSelectedPage={setSelectedPage}/> 
              <Link page="Contact" selectedPage={selectedPage} setSelectedPage={setSelectedPage}/> 
              </div>
              <div className={`${flexBetween} gap-8 `}>
                <p>Sign in</p>
                <ActionButton setSelectedPage={setSelectedPage}>Become a Member</ActionButton>
              </div>
            </div>) : (<button
            className='rounded-full bg-secondary-500 p-2'
            onClick={()=>setIsMenuToggled(!isMenuToggled)}>
              <Bars3Icon className='w-6 h-6 text-white'/>
            </button>)}
            
          </div>
        </div>
      </div>
      {/*mobile menu modal*/}
      {!isAboveMediumScreens && isMenuToggled && <div className='fixed right-0 bottom-0 z-40 h-full w-[300px] bg-primary-100 drop-shadow-xl '>
      {/*close Icon */}
      <div className='flex justify-end p-12'>
        <button onClick={()=> setIsMenuToggled(!isMenuToggled)}><XMarkIcon className='h-6 w-6 text-gray-400'/></button>
      </div> 
      {/*menu items*/}
      <div className='ml-[33%] flex flex-col gap-10 text-2xl'>
              <Link page="Home" selectedPage={selectedPage} setSelectedPage={setSelectedPage}/> 
              <Link page="Benefits" selectedPage={selectedPage} setSelectedPage={setSelectedPage}/> 
              <Link page="Our Classes" selectedPage={selectedPage} setSelectedPage={setSelectedPage}/> 
              <Link page="Contact" selectedPage={selectedPage} setSelectedPage={setSelectedPage}/> 
              </div>
        </div>} 
    

    </nav>
  )
}

export default Navbar