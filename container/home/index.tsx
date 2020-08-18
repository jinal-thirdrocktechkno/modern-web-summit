import React from 'react'
import Logo from '../../components/logo'
import NotifyForm from '../../components/notify'
import Modern from '../modern'
import Speaker from '../speaker/index'
import Sponsor from '../sponsor/index'

const Home = () => {
  return (
    <div>
      <div className='flex items-center justify-between w-full absolute -mt-10 pt-1'>
        <img className="inline p-2 ml-2 mt-1" src="/images/menu.png" alt="logo" />
        <div className="flex items-center mr-10">
          <p className="uppercase font-extrabold text-typographyLight text-opacity-25 tracking-widest">share</p>
          <img className="inline p-2" src="/images/twitter.png" alt="logo" />
          <img className="inline p-2" src="/images/linkedIn.png" alt="logo" />
          <img className="inline p-2" src="/images/github.png" alt="logo" />
        </div>
      </div>


      <div className='landing-wrap flex'>
        <img className="inline self-start -mt-10 ml-8" src="/images/left.png" alt="logo" />
        <div className='w-2/5 m-auto text-center -mt-10'>
          <Logo />
          <p className='text-typography font-medium text-base mb-10'>
            {"Connecting the world’s top designers and developers to redefine the bounds of possibility through an exciting exploration of cutting-edge technologies, lessons, & patterns"}</p>
          <NotifyForm />
          <p className='text-typography font-medium text-base mt-5'>{"Terms of Service • Privacy Policy • Code of Conduct"}</p>
        </div>
        <img className="inline self-end mr-8 relative top-1/2 transform -translate-y-48" src="/images/right.png" alt="logo" />
      </div>

      <div className='w-2/5 m-10 text-center'>
        <Modern />
      </div>
      <div className='m-10 text-center'>
        <Speaker />
      </div>
      <div className='m-10 text-center'>
        <Sponsor />
      </div>
    </div>
  )
}
export default Home
