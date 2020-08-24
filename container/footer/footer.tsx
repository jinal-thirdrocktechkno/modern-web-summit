import React, { useState } from 'react'
import NotifyForm from '../../components/notify'
import FooterLink from '../../components/footerLinks'

const Footer = () => {
  const [NotifyModal, setShowNotifyModal] = useState(false)

  const openNotifyModal = () => {
    setShowNotifyModal(true)
  }

  const closeNotifyModal = () => {
    setShowNotifyModal(false)
  }

  return (
    <div className="bg-gray-400 p-10 flex relative">
      {NotifyModal &&
        <div className="p-5 bg-white absolute w-2/5 top-0 left-1/2 shadow-xs transform -translate-y-40 -translate-x-1/2">
          <div className="relative">
            <div onClick={() => closeNotifyModal()} className="absolute top-0 right-0 cursor-pointer">
              <img className="" src="/images/close.svg" />
            </div>
            <h4 className="text-2xl font-extrabold text-black uppercase">Notify me</h4>
            <p className="text-base text-gray-300">We’ll send you an email when ticket sales open up!</p>
            <div className="flex mt-8">
              <input
                className="py-2 px-6 mr-2 h-16 flex-grow border-solid border-2 text-xl border-black focus:outline-none"
                value=""
                placeholder="Your Email"
              />
              <button className="bg-black text-white py-2 px-12 uppercase text-xl focus:outline-none">NOTIFY ME</button>
            </div>
          </div>
        </div>
      }
      <div className="w-2/5 justify-center text-center flex flex-col">
        <img className="h-20" src="/images/mws-logo.svg" />
        {/* <NotifyForm buttonClass="mt-10" /> */}
        <div className="mt-10 flex justify-center">
          <button onClick={() => openNotifyModal()} className="custom-btn focus:outline-none" type="button">Notify me when tickets go on sale</button>
        </div>
      </div>
      <div className="w-3/5 flex flex-col">
        <FooterLink />
        <div className="items-end flex flex-col mt-10 mr-12">
          <img className="h-10" src="/images/event-loop-footer.svg" />
          <p className="mt-5 text-gray-200 text-sm">Copyright 2020 Event Loop, Inc.</p>
        </div>
      </div>
    </div>
  )
}

export default Footer
