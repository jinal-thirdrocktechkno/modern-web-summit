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

// used for navigate to div future use 
const ScrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop)

const Home = () => {
  const [showMenu, setShowMenu] = useState(false)

  const menuOpen = () => {
    setShowMenu(true)
  }

  let speakerRef = useRef(null)
  let sponsorRef = useRef(null)
  let curatorsRef = useRef(null)

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

  const { loading, error, data } = useQuery(API_TEST, { variables: { id: 15125 } });

  return (
    <div>
      <div className='flex items-center justify-between w-full absolute -mt-10 pt-1'>
        <div onClick={() => menuOpen()}>
          <img className="inline p-2 ml-2 mt-1 cursor-pointer" src="/images/menu.svg" alt="logo" />
        </div>
        {showMenu && <NavMenu />}
        <div className="flex items-center mr-10">
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


      <div className='landing-wrap flex'>
        <img className="inline self-start -mt-10 ml-8" src="/images/left.svg" alt="logo" />
        <div className='w-2/5 m-auto text-center -mt-10'>
          <Logo />
          <p className='text-gray-300 font-medium text-base mb-10'>
            {"Connecting the world’s top designers and developers to redefine the bounds of possibility through an exciting exploration of cutting-edge technologies, lessons, & patterns"}</p>
          <NotifyForm buttonClass="" />
          <div className="mt-5">
            <a className="text-gray-300 font-medium text-base" href="https://www.google.co.in/">Terms of Service • </a>
            <a className="text-gray-300 font-medium text-base" href="https://www.google.co.in/">Privacy Policy • </a>
            <a className="text-gray-300 font-medium text-base" href="https://www.google.co.in/">Code of Conduct</a>
          </div>
        </div>
        <img className="inline self-end mr-8 relative top-1/2 transform -translate-y-48" src="/images/right.svg" alt="logo" />
      </div>

      <div className='bg-darkBg m-10 text-center flex items-center justify-center min-h-778'>
        <Modern />
      </div>
      <div ref={speakerRef} className='m-10'>
        <Speaker />
      </div>
      <div ref={sponsorRef} className='m-10'>
        <Sponsor />
      </div>
      <div ref={curatorsRef} className="m-10">
        <Curators />
      </div>
      <div className="m-10">
        <ShareSocial />
      </div>
      <Footer />
    </div>
  )
}
export default Home
