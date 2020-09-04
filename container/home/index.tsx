import React, { useRef, useState } from 'react'
import Logo from '../../components/logo'
import NotifyForm from '../../components/notify'
import Modern from '../modern'
import Speaker from '../speaker/index'
import Sponsor from '../sponsor/index'
import Curators from '../curators'
import ShareSocial from '../../components/shareSocial'
import Footer from '../footer/footer'
import NavMenu from '../../components/navMenu'
import { useQuery, gql } from '@apollo/client';
import TrackVisibility from 'react-on-screen';


// used for navigate to div future use 
const ScrollToRef = (ref) => ref.current.scrollIntoView()

const Home = () => {
  const [showMenu, setShowMenu] = useState(false)

  const menuOpen = () => {
    setShowMenu(!showMenu)
  }

  let speakerRef = useRef(null)
  let sponsorRef = useRef(null)
  let curatorsRef = useRef(null)
  let homeRef = useRef(null)

  const API_TEST = gql`
  query ($id: Int) { 
    Media (id: $id, type: ANIME) { 
      id
      title {
        romaji
        english
        native
      }
    }
  }`
  const handleButtonClick = (type) => {
    switch (type) {
      case 'speakers': {
        ScrollToRef(speakerRef)
      }
        break;
      case 'sponsors': {
        ScrollToRef(sponsorRef)
      }
        break;
      case 'curators': {
        ScrollToRef(curatorsRef)
      }
        break;
      default: {
        ScrollToRef(homeRef)
      }
        break;
    }
    menuOpen()
  }

  const { loading, error, data } = useQuery(API_TEST, { variables: { id: 15125 } });

  return (
    <div className='h-full'>
      <div className='flex items-center justify-between w-full absolute md:-mt-10 pt-1'>
        <div onClick={() => menuOpen()}>
          <img className="sm:hidden md:inline p-2 ml-2 mt-1 cursor-pointer" src="/images/menu.svg" alt="logo" />
          <img className="md:hidden sm:inline p-2 ml-2 mt-1 cursor-pointer" src="/images/menu-white.svg" alt="logo" />
        </div>
        {showMenu &&
          <NavMenu
            menuOpen={menuOpen}
            handleButtonClick={handleButtonClick} />}
        <div className="items-center mr-10 sm:hidden md:flex">
          <p className="uppercase font-extrabold text-gray-400 text-opacity-25 tracking-widest">share</p>
          <a href="https://www.google.co.in/">
            <img className="inline p-2" src="/images/Twitter.svg" alt="logo" />
          </a>
          <a href="https://www.google.co.in/">
            <img className="inline p-2" src="/images/LinkedIn.svg" alt="logo" />
          </a>
          <a href="https://www.google.co.in/">
            <img className="inline p-2" src="/images/github.svg" alt="logo" />
          </a>
        </div>
      </div>


      <div className='bg-white flex shadow-xs md:h-100-5 sm:h-auto flex sm:m-0 md:m-10' ref={homeRef}>
        <div className="sm:hidden md:flex -mt-10">
          <img className="inline self-start ml-8 animated fadeInDownBig" src="/images/left-bar-1.svg" alt="logo" />
          <img className="inline self-start -ml-5 animated fadeInDownBig slow" src="/images/left-bar-2.svg" alt="logo" />
          <img className="inline self-start -ml-5 animated fadeInDownBig slower" src="/images/left-bar-3.svg" alt="logo" />
        </div>
        <div className='md:w-2/5 sm:w-full m-auto text-center md:-mt-10 sm:mt-0'>
          <Logo />
          <p className='text-gray-300 font-medium text-base md:mb-10 sm:p-5 md:p-0'>
            {"Connecting the world’s top designers and developers to redefine the bounds of possibility through an exciting exploration of cutting-edge technologies, lessons, & patterns"}</p>
          <NotifyForm buttonClass="" />
          <div className="mt-5 sm:mb-10 md:mb-0">
            <a className="text-gray-300 font-medium text-base hover:text-purple-100" href="https://www.google.co.in/">Terms of Service • </a>
            <a className="text-gray-300 font-medium text-base hover:text-purple-100" href="https://www.google.co.in/">Privacy Policy • </a>
            <a className="text-gray-300 font-medium text-base hover:text-purple-100" href="https://www.google.co.in/">Code of Conduct</a>
          </div>
        </div>
        <div className="sm:hidden md:flex mr-8 relative top-1/2 transform -translate-y-48">
        <img className="inline self-end animated fadeInUpBig slower" src="/images/right-bar-1.svg" alt="logo" />
        <img className="inline self-end animated fadeInUpBig slow -ml-5 mb-10" src="/images/right-bar-2.svg" alt="logo" />
        <img className="inline self-end animated fadeInUpBig -ml-5 mb-20" src="/images/right-bar-3.svg" alt="logo" />
        </div>
      </div>

      <div className='bg-darkBg m-10 text-center sm:hidden md:flex items-center justify-center min-h-778'>
        <TrackVisibility>
          <Modern />
        </TrackVisibility>
      </div>
      <div ref={speakerRef} className='sm:m-0 md:m-10'>
        <Speaker />
      </div>
      <div ref={sponsorRef} className='sm:m-0 md:m-10'>
        <Sponsor />
      </div>
      <div ref={curatorsRef} className="sm:m-0 md:m-10">
        <Curators />
      </div>
      <div className="sm:m-0 md:m-10 sm:p-2 md:p-0">
        <ShareSocial />
      </div>
      <Footer />
    </div>
  )
}
export default Home
