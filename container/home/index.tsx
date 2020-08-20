import React, { useRef } from 'react'
import Logo from '../../components/logo'
import NotifyForm from '../../components/notify'
import Modern from '../modern'
import Speaker from '../speaker/index'
import Sponsor from '../sponsor/index'
import Curators from '../curators'
import ShareSocial from '../../components/shareSocial'
import Footer from '../footer/footer'
import NavMenu from '../../components/navMenu'

const ScrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop)

const Home = () => {

  let speakerRef = useRef(null)
  let sponsorRef = useRef(null)
  let curatorsRef = useRef(null)

  return (
    <div>
      <div className='flex items-center justify-between w-full absolute -mt-10 pt-1'>
        <img className="inline p-2 ml-2 mt-1" src="/images/menu.svg" alt="logo" />
        <div className="flex items-center mr-10">
          <p className="uppercase font-extrabold text-typographyLight text-opacity-25 tracking-widest">share</p>
          <img className="inline p-2" src="/images/Twitter.svg" alt="logo" />
          <img className="inline p-2" src="/images/LinkedIn.svg" alt="logo" />
          <img className="inline p-2" src="/images/github.svg" alt="logo" />
        </div>
      </div>


      <div className='landing-wrap flex'>
        <img className="inline self-start -mt-10 ml-8" src="/images/left.svg" alt="logo" />
        <div className='w-2/5 m-auto text-center -mt-10'>
          <Logo />
          <p className='text-typography font-medium text-base mb-10'>
            {"Connecting the world’s top designers and developers to redefine the bounds of possibility through an exciting exploration of cutting-edge technologies, lessons, & patterns"}</p>
          <NotifyForm buttonClass="" />
          <p className='text-typography font-medium text-base mt-5'>{"Terms of Service • Privacy Policy • Code of Conduct"}</p>
        </div>
        <img className="inline self-end mr-8 relative top-1/2 transform -translate-y-48" src="/images/right.svg" alt="logo" />
      </div>

      <div className='modern-wrap'>
        <Modern />
      </div>
      <div ref={speakerRef} className='m-10'>
        <Speaker />
      </div>
      <div ref={sponsorRef} className='m-10 text-center'>
        <Sponsor />
      </div>
      <div ref={curatorsRef} className="m-10 text-center">
        <Curators />
      </div>
      <div className="m-10 text-center">
        <ShareSocial />
      </div>
      <Footer />
    </div>
  )
}
export default Home
