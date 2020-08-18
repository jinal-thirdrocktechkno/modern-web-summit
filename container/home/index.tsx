import React from 'react'
import Logo from '../../components/logo'
import NotifyForm from '../../components/notify'
import Modern from '../modern'
import Speaker from '../speaker/index'
import Sponsor from '../sponsor/index'

const Home = () => {
  return (
    <div className='landing-wrap'>
      <div className='w-2/5 m-auto text-center'>
        <Logo />
        <p className='text-typography font-medium text-base mb-10'>
          {"Connecting the world’s top designers and developers to redefine the bounds of possibility through an exciting exploration of cutting-edge technologies, lessons, & patterns"}</p>
        <NotifyForm />
        <p className='text-typography font-medium text-base mt-5'>{"Terms of Service • Privacy Policy • Code of Conduct"}</p>
      </div>
      <div className='w-2/5 m-auto text-center'>
        <Modern />
      </div>
      <div className='m-auto text-center'>
        <Speaker />
      </div>
      <div className='m-auto text-center'>
        <Sponsor />
      </div>
    </div>
  )
}
export default Home
